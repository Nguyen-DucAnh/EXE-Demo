# HeyPaaaa - Hướng dẫn chăm sóc vợ và con cho các ông bố

Ứng dụng web React giúp các ông bố tương lai và mới làm cha học cách chăm sóc vợ trong thai kỳ, sau sinh, và chăm sóc trẻ sơ sinh.

## 🚀 Tech Stack

### Frontend
- **React 18** với **TypeScript**
- **Vite** - Build tool nhanh
- **Shadcn UI** - Component library đẹp và hiện đại
- **Redux Toolkit (RTK)** + **Redux Thunk** - State management
- **React Router** - Routing với Public/Private routes
- **Axios** - HTTP client
- **LocalStorage** - Lưu trữ dữ liệu local
- **react-oidc-context** - OIDC authentication (sẵn sàng tích hợp)

### Backend
- **Node.js** + **Express** - RESTful API server
- **OpenAI API** - AI Assistant với RAG (Retrieval Augmented Generation)

## 📁 Cấu trúc Project

```
bocomat/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn UI components
│   │   └── Layout.tsx    # Main layout component
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Knowledge.tsx
│   │   ├── KnowledgeDetail.tsx
│   │   ├── Assistant.tsx
│   │   ├── About.tsx
│   │   └── Login.tsx
│   ├── routes/           # Route guards
│   │   ├── PublicRoute.tsx
│   │   └── PrivateRoute.tsx
│   ├── store/            # Redux store
│   │   ├── slices/       # Redux slices
│   │   ├── index.ts
│   │   └── hooks.ts
│   ├── services/         # API services
│   │   ├── api.ts
│   │   └── knowledgeService.ts
│   ├── data/             # Static data
│   │   └── knowledge.json
│   ├── types/            # TypeScript types
│   ├── lib/              # Utilities
│   ├── App.tsx
│   └── main.tsx
├── server/               # Backend Express server
│   └── index.js
├── public/               # Static assets
└── package.json
```

## 🛠️ Cài đặt và Chạy

### Yêu cầu
- Node.js >= 18
- npm hoặc yarn

### Bước 1: Cài đặt dependencies

```bash
# Cài đặt dependencies cho frontend
npm install

# Cài đặt dependencies cho backend (từ thư mục server)
cd server
npm install
cd ..
```

### Bước 2: Cấu hình Environment Variables

Tạo file `.env` trong thư mục gốc (copy từ `.env.example`):

```bash
cp .env.example .env
```

Chỉnh sửa `.env` và thêm OpenAI API key:

```env
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_MODEL=gpt-3.5-turbo
PORT=5000
```

### Bước 3: Chạy ứng dụng

**Terminal 1 - Backend Server:**
```bash
npm run dev:server
# hoặc
cd server && npm run dev
```

Server sẽ chạy tại `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Frontend sẽ chạy tại `http://localhost:3000`

## 📚 Tính năng

### 1. Trang chủ
- Giới thiệu về HeyPaaaa
- Tổng quan các giai đoạn trong hành trình
- Navigation đến các phần khác

### 2. Kiến thức
- Danh sách bài viết theo giai đoạn:
  - Chuẩn bị mang thai
  - Tam cá nguyệt 1, 2, 3
  - Chăm sóc sau sinh
  - Chăm sóc trẻ sơ sinh
- Tìm kiếm theo từ khóa
- Lọc theo giai đoạn
- Xem chi tiết từng bài viết

### 3. Trợ lý AI
- Đặt câu hỏi về chăm sóc vợ và con
- AI tìm kiếm trong cơ sở kiến thức (RAG)
- Trả lời bằng tiếng Việt, đồng cảm và dễ hiểu
- Lưu lịch sử câu hỏi trong LocalStorage

### 4. Về chúng tôi
- Sứ mệnh và giá trị
- Thông tin về dự án

## 🔐 Authentication

Hiện tại, ứng dụng sử dụng mock authentication cho MVP. Để tích hợp OIDC:

1. Cấu hình OIDC provider trong `.env`
2. Uncomment code trong `src/routes/PrivateRoute.tsx` và `PublicRoute.tsx`
3. Cấu hình `AuthProvider` từ `react-oidc-context` trong `App.tsx`

## 🤖 AI Assistant

AI Assistant sử dụng kỹ thuật RAG (Retrieval Augmented Generation):
1. Tìm kiếm các bài viết liên quan trong cơ sở kiến thức
2. Đưa context vào prompt
3. Gọi OpenAI API để tạo câu trả lời
4. Trả lời bằng tiếng Việt, đồng cảm, không chẩn đoán y tế

## 📝 Thêm kiến thức mới

Chỉnh sửa file `src/data/knowledge.json`:

```json
{
  "id": "unique-id",
  "title": "Tiêu đề bài viết",
  "stage": "preparing|trimester1|trimester2|trimester3|postpartum|newborn",
  "content": "Nội dung bài viết...",
  "tags": ["tag1", "tag2"]
}
```

## 🚀 Build cho Production

```bash
# Build frontend
npm run build

# Frontend build sẽ nằm trong thư mục dist/
# Có thể deploy lên Vercel, Netlify, hoặc bất kỳ static hosting nào

# Backend có thể deploy lên Railway, Render, hoặc VPS
```

## 📦 Scripts

- `npm run dev` - Chạy frontend development server
- `npm run build` - Build frontend cho production
- `npm run preview` - Preview production build
- `npm run server` - Chạy backend server
- `npm run dev:server` - Chạy backend với nodemon (auto-reload)

## 🔧 Cấu hình

### Thay đổi port
- Frontend: Sửa `vite.config.ts`
- Backend: Sửa `PORT` trong `.env`

### Thay đổi OpenAI model
Sửa `OPENAI_MODEL` trong `.env` (mặc định: `gpt-3.5-turbo`)

## ⚠️ Lưu ý

- **Không commit file `.env`** chứa API keys
- Thông tin trên website chỉ mang tính tham khảo
- Luôn tham khảo ý kiến bác sĩ cho các vấn đề y tế quan trọng
- AI không thay thế tư vấn y tế chuyên nghiệp

## 📄 License

MIT

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

## 📧 Liên hệ

Nếu có câu hỏi hoặc góp ý, vui lòng tạo issue trên GitHub.

---

**HeyPaaaa** - Đồng hành cùng các ông bố trên hành trình làm cha ❤️

