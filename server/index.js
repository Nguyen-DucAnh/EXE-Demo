import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load knowledge data
const knowledgeDataPath = join(__dirname, '../src/data/knowledge.json');
const knowledgeData = JSON.parse(readFileSync(knowledgeDataPath, 'utf-8'));

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
let openai;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
} else {
  console.warn('Warning: OPENAI_API_KEY not set. AI features will be limited.');
}

// Search knowledge base
const searchKnowledge = (query, stage = null) => {
  const lowerQuery = query.toLowerCase();
  let results = knowledgeData;

  if (stage) {
    results = results.filter((article) => article.stage === stage);
  }

  return results
    .filter((article) => {
      const matchesTitle = article.title.toLowerCase().includes(lowerQuery);
      const matchesContent = article.content.toLowerCase().includes(lowerQuery);
      const matchesTags = article.tags.some((tag) =>
        tag.toLowerCase().includes(lowerQuery)
      );
      return matchesTitle || matchesContent || matchesTags;
    })
    .slice(0, 5); // Limit to top 5 results
};

// API Routes

// Get all knowledge articles
app.get('/api/knowledge', (req, res) => {
  const { stage } = req.query;
  let articles = knowledgeData;

  if (stage) {
    articles = articles.filter((article) => article.stage === stage);
  }

  res.json(articles);
});

// Search knowledge articles
app.get('/api/knowledge/search', (req, res) => {
  const { q, stage } = req.query;

  if (!q) {
    return res.json([]);
  }

  const results = searchKnowledge(q, stage);
  res.json(results);
});

// Get article by ID
app.get('/api/knowledge/:id', (req, res) => {
  const { id } = req.params;
  const article = knowledgeData.find((a) => a.id === id);

  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }

  res.json(article);
});

// AI Assistant endpoint
app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    // Search relevant knowledge first (RAG)
    const relevantArticles = searchKnowledge(question);
    const context = relevantArticles
      .map((article) => `- ${article.title}: ${article.content}`)
      .join('\n\n');

    // Construct prompt with context
    const systemPrompt = `Bạn là một trợ lý AI thân thiện và đồng cảm, chuyên hỗ trợ các ông bố tương lai và mới làm cha. 
Nhiệm vụ của bạn là cung cấp thông tin hữu ích về chăm sóc vợ trong thai kỳ, sau sinh, và chăm sóc trẻ sơ sinh.

QUAN TRỌNG:
- Trả lời bằng tiếng Việt
- Sử dụng ngôn ngữ đơn giản, dễ hiểu, đồng cảm
- Không đưa ra chẩn đoán y tế
- Luôn khuyến khích tham khảo ý kiến bác sĩ khi cần thiết
- Tôn trọng và hỗ trợ, không phán xét
- Nếu có thông tin liên quan từ cơ sở kiến thức, hãy sử dụng nó

${context ? `\nThông tin liên quan từ cơ sở kiến thức:\n${context}` : ''}`;

    const userPrompt = `Câu hỏi: ${question}\n\nHãy trả lời một cách hữu ích và đồng cảm.`;

    if (!openai) {
      // Fallback response if OpenAI is not configured
      return res.json({
        answer: `Xin chào! Tôi là trợ lý AI của BỐCÓMẶT. 

Hiện tại, tính năng AI chưa được cấu hình đầy đủ. Vui lòng cấu hình OPENAI_API_KEY trong file .env để sử dụng tính năng này.

Tuy nhiên, dựa trên câu hỏi của bạn "${question}", tôi có thể tìm thấy một số thông tin liên quan trong cơ sở kiến thức của chúng tôi. Hãy thử tìm kiếm trong phần "Kiến thức" để xem các bài viết liên quan.

Lưu ý: Luôn tham khảo ý kiến bác sĩ cho các vấn đề y tế quan trọng.`,
      });
    }

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const answer = completion.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời câu hỏi này.';

    res.json({ answer });
  } catch (error) {
    console.error('Error calling OpenAI:', error);

    // Handle OpenAI API key errors specifically
    if (error.message && error.message.includes('API key')) {
      return res.status(401).json({
        error: 'Invalid API key',
        message: 'OpenAI API key không hợp lệ. Vui lòng kiểm tra OPENAI_API_KEY trong file .env. Nếu chưa có API key, bạn có thể sử dụng tính năng tìm kiếm kiến thức thay thế.',
      });
    }

    // Handle quota/billing errors
    if (error.message && (error.message.includes('quota') || error.message.includes('429'))) {
      return res.status(429).json({
        error: 'Quota exceeded',
        message: 'Đã vượt quá hạn mức API. Vui lòng kiểm tra billing và quota tại https://platform.openai.com/account/billing. Bạn có thể sử dụng tính năng tìm kiếm kiến thức thay thế.',
      });
    }

    res.status(500).json({
      error: 'Failed to get answer',
      message: error.message || 'Có lỗi xảy ra khi gọi OpenAI API',
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root path - redirect to API info
app.get('/', (req, res) => {
  res.json({
    message: 'BỐCÓMẶT API Server',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      knowledge: '/api/knowledge',
      knowledgeSearch: '/api/knowledge/search?q=query',
      knowledgeById: '/api/knowledge/:id',
      aiAsk: 'POST /api/ask',
    },
    note: 'This is an API server. Please use the frontend at http://localhost:3000',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
  console.log(`Frontend should be running at http://localhost:3000`);
});

