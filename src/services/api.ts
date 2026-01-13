import axios from 'axios';
import type { KnowledgeArticle } from '@/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const knowledgeApi = {
  getAll: async (): Promise<KnowledgeArticle[]> => {
    const response = await api.get('/knowledge');
    return response.data;
  },

  getByStage: async (stage: string): Promise<KnowledgeArticle[]> => {
    const response = await api.get(`/knowledge?stage=${stage}`);
    return response.data;
  },

  search: async (query: string, stage?: string): Promise<KnowledgeArticle[]> => {
    const params: Record<string, string> = { q: query };
    if (stage) params.stage = stage;
    const response = await api.get('/knowledge/search', { params });
    return response.data;
  },

  getById: async (id: string): Promise<KnowledgeArticle> => {
    const response = await api.get(`/knowledge/${id}`);
    return response.data;
  },
};

export const aiApi = {
  ask: async (question: string): Promise<string> => {
    try {
      const response = await api.post('/ask', { question });
      if (!response.data || !response.data.answer) {
        throw new Error('Invalid response from server');
      }
      return response.data.answer;
    } catch (error: any) {
      console.error('API Error:', error);
      if (error.response) {
        // Server responded with error
        const errorMsg = error.response.data?.message || error.response.data?.error || 'Server error';
        // Handle 401 specifically (invalid API key)
        if (error.response.status === 401) {
          throw new Error(`API key không hợp lệ: ${errorMsg}`);
        }
        throw new Error(errorMsg);
      } else if (error.request) {
        // Request made but no response (backend not running)
        throw new Error('Không thể kết nối đến server. Vui lòng đảm bảo backend đang chạy tại http://localhost:5000');
      } else {
        // Something else happened
        throw new Error(error.message || 'Có lỗi xảy ra');
      }
    }
  },
};

export default api;

