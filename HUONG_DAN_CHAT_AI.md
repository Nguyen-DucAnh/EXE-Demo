# 💬 Hướng Dẫn Sử Dụng Chat AI

## ⚠️ Lưu Ý Quan Trọng

Chat AI cần **backend server đang chạy** để hoạt động!

## 🚀 Các Bước Để Chat AI Hoạt Động

### Bước 1: Khởi động Backend Server

Mở **Terminal 1** và chạy:

```bash
npm run dev:server
```

Bạn sẽ thấy:
```
Server is running on http://localhost:5000
API endpoints available at http://localhost:5000/api
```

✅ **Nếu thấy dòng này = Backend đã chạy thành công!**

### Bước 2: Khởi động Frontend

Mở **Terminal 2** (terminal mới) và chạy:

```bash
npm run dev
```

Bạn sẽ thấy:
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:3000/
```

### Bước 3: Truy cập Chat AI

1. Mở trình duyệt: http://localhost:3000
2. Click vào menu **"Trợ lý AI"** hoặc truy cập: http://localhost:3000/assistant
3. Nhập câu hỏi và nhấn Send

## 🔍 Kiểm Tra Backend Có Chạy Không

### Cách 1: Test bằng PowerShell

Chạy script test:
```powershell
.\test-ai.ps1
```

### Cách 2: Test bằng Browser

Mở trình duyệt và truy cập:
```
http://localhost:5000/api/health
```

Nếu thấy:
```json
{"status":"ok","timestamp":"..."}
```
✅ Backend đang chạy!

### Cách 3: Kiểm tra Console

1. Mở Developer Tools (F12)
2. Vào tab **Console**
3. Gửi câu hỏi trong chat
4. Xem có lỗi gì không

## ❌ Các Lỗi Thường Gặp

### Lỗi: "Không thể kết nối đến server"

**Nguyên nhân:** Backend chưa chạy

**Giải pháp:**
```bash
# Chạy backend
npm run dev:server
```

### Lỗi: "CORS policy"

**Nguyên nhân:** Backend chưa chạy hoặc CORS chưa được cấu hình

**Giải pháp:**
- Đảm bảo backend đang chạy
- Kiểm tra `server/index.js` có `app.use(cors())`

### Lỗi: "Failed to get answer"

**Nguyên nhân:** 
- OpenAI API key chưa được cấu hình
- Hoặc có lỗi từ OpenAI API

**Giải pháp:**
1. Mở file `.env`
2. Thêm OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-key-here
   ```
3. Khởi động lại backend

**Lưu ý:** Nếu chưa có API key, bạn vẫn có thể test với fallback response.

### Không thấy phản hồi

**Kiểm tra:**
1. Backend console có log gì không?
2. Frontend console (F12) có lỗi gì không?
3. Network tab (F12) có request đến `/api/ask` không?

## 🎯 Test Nhanh

1. **Mở 2 terminal:**
   - Terminal 1: `npm run dev:server`
   - Terminal 2: `npm run dev`

2. **Mở browser:** http://localhost:3000/assistant

3. **Gửi câu hỏi:** "Xin chào, bạn có thể giúp gì cho tôi?"

4. **Kiểm tra:**
   - Thấy "Đang suy nghĩ..." = Đang gửi request
   - Thấy câu trả lời = ✅ Hoạt động!
   - Thấy lỗi = Xem phần "Các Lỗi Thường Gặp" ở trên

## 📝 Checklist

Trước khi sử dụng chat AI, đảm bảo:

- [ ] Backend server đang chạy (Terminal 1)
- [ ] Frontend đang chạy (Terminal 2)
- [ ] Không có lỗi trong backend console
- [ ] Không có lỗi trong frontend console (F12)
- [ ] Có thể truy cập http://localhost:5000/api/health

## 💡 Mẹo

- Luôn chạy backend trước khi chạy frontend
- Nếu thay đổi `.env`, phải restart backend
- Xem console log để biết lỗi cụ thể
- Test endpoint bằng `test-ai.ps1` script

---

**Nếu vẫn không hoạt động, xem file `TROUBLESHOOTING_AI.md` để debug chi tiết hơn.**

