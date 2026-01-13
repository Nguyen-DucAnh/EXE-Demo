# 🚀 Hướng dẫn khởi chạy nhanh

## Bước 1: Tạo file .env

Tạo file `.env` trong thư mục gốc (copy từ `env.example`):

```bash
# Windows PowerShell
Copy-Item env.example .env

# Hoặc tạo thủ công file .env với nội dung:
```

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo
PORT=5000
VITE_API_BASE_URL=http://localhost:5000/api
```

**Lưu ý:** Nếu chưa có OpenAI API key, bạn vẫn có thể chạy ứng dụng. Tính năng AI Assistant sẽ có phản hồi giới hạn.

## Bước 2: Chạy ứng dụng

### Cách 1: Chạy thủ công (Khuyến nghị)

Mở **2 terminal riêng biệt**:

**Terminal 1 - Backend:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Cách 2: Sử dụng script PowerShell

```powershell
.\start.ps1
```

Script sẽ kiểm tra và hướng dẫn bạn.

## Bước 3: Truy cập ứng dụng

Mở trình duyệt và truy cập:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api

## ✅ Kiểm tra

1. ✅ Trang chủ hiển thị đúng
2. ✅ Có thể xem danh sách kiến thức
3. ✅ Có thể tìm kiếm bài viết
4. ✅ Có thể xem chi tiết bài viết
5. ✅ AI Assistant hoạt động (nếu đã có API key)

## 🔧 Troubleshooting

### Lỗi "Port already in use"
- Đổi PORT trong `.env` hoặc tắt ứng dụng đang dùng port đó

### AI Assistant không hoạt động
- Kiểm tra `OPENAI_API_KEY` trong `.env`
- Đảm bảo backend đang chạy
- Xem console log của backend

### Lỗi "Cannot find module"
- Chạy lại `npm install` trong cả thư mục gốc và `server/`

## 📝 Lưu ý

- Backend phải chạy trước khi frontend gọi API
- Nếu không có OpenAI API key, vẫn có thể dùng các tính năng khác
- Tất cả dữ liệu được lưu trong LocalStorage (không cần database)

---

**Chúc bạn sử dụng vui vẻ!** 🎉

