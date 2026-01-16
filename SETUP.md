# Hướng dẫn Setup Nhanh

## Bước 1: Cài đặt Dependencies

```bash
# Cài đặt frontend dependencies
npm install

# Cài đặt backend dependencies
cd server
npm install
cd ..
```

## Bước 2: Cấu hình Environment

Tạo file `.env` trong thư mục gốc:

```bash
# Copy từ file mẫu
cp env.example .env
```

Chỉnh sửa `.env` và thêm OpenAI API key:

```env
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_MODEL=gpt-3.5-turbo
PORT=5000
```

**Lưu ý:** Nếu không có OpenAI API key, ứng dụng vẫn chạy được nhưng tính năng AI Assistant sẽ có phản hồi giới hạn.

## Bước 3: Chạy Ứng dụng

### Terminal 1 - Backend:
```bash
npm run dev:server
```

Backend sẽ chạy tại: `http://localhost:5000`

### Terminal 2 - Frontend:
```bash
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:3000`

## Kiểm tra

1. Mở trình duyệt và truy cập `http://localhost:3000`
2. Bạn sẽ thấy trang chủ của HeyPaaaa
3. Thử các tính năng:
   - Xem kiến thức
   - Tìm kiếm bài viết
   - Đặt câu hỏi cho AI Assistant (cần OpenAI API key)

## Troubleshooting

### Lỗi "Cannot find module"
- Chạy lại `npm install` trong cả thư mục gốc và `server/`

### Lỗi "Port already in use"
- Thay đổi PORT trong `.env` hoặc kill process đang dùng port đó

### AI Assistant không hoạt động
- Kiểm tra `OPENAI_API_KEY` trong `.env`
- Kiểm tra backend đang chạy tại port 5000
- Xem console log của backend để debug

### Lỗi CORS
- Đảm bảo backend đang chạy và cho phép CORS từ frontend

## Next Steps

- Thêm nhiều bài viết vào `src/data/knowledge.json`
- Tích hợp OIDC authentication (xem README.md)
- Customize UI/UX theo nhu cầu
- Deploy lên production

