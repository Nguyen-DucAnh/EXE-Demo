# 🔧 Khắc Phục Lỗi Chat AI

## Các Vấn Đề Thường Gặp

### 1. Backend Server Chưa Chạy

**Triệu chứng:** 
- Không nhận được phản hồi từ AI
- Lỗi "Network Error" hoặc "Failed to fetch"

**Giải pháp:**
```bash
# Chạy backend server trong terminal riêng
npm run dev:server
```

Kiểm tra server đang chạy tại: http://localhost:5000

### 2. OpenAI API Key Chưa Được Cấu Hình

**Triệu chứng:**
- Nhận được thông báo "tính năng AI chưa được cấu hình"

**Giải pháp:**
1. Mở file `.env`
2. Thêm OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```
3. Khởi động lại backend server

**Lưu ý:** Nếu chưa có API key, bạn vẫn có thể test với fallback response.

### 3. CORS Error

**Triệu chứng:**
- Lỗi "CORS policy" trong console

**Giải pháp:**
- Backend đã có CORS enabled, nhưng đảm bảo backend đang chạy
- Kiểm tra `vite.config.ts` có proxy setup đúng không

### 4. API Endpoint Không Đúng

**Triệu chứng:**
- 404 Not Found khi gọi API

**Giải pháp:**
- Kiểm tra backend đang chạy tại port 5000
- Kiểm tra `VITE_API_BASE_URL` trong `.env`

### 5. Error Không Hiển Thị

**Triệu chứng:**
- Không thấy lỗi gì nhưng không hoạt động

**Giải pháp:**
- Mở Developer Tools (F12)
- Xem tab Console và Network
- Kiểm tra response từ API

## Cách Kiểm Tra

### Bước 1: Kiểm tra Backend
```bash
# Test health endpoint
curl http://localhost:5000/api/health
```

Kết quả mong đợi:
```json
{"status":"ok","timestamp":"..."}
```

### Bước 2: Test AI Endpoint
```bash
curl -X POST http://localhost:5000/api/ask \
  -H "Content-Type: application/json" \
  -d "{\"question\":\"Xin chào\"}"
```

### Bước 3: Kiểm tra Frontend Console
- Mở Developer Tools (F12)
- Xem tab Console
- Xem tab Network để kiểm tra API calls

## Debug Checklist

- [ ] Backend server đang chạy (port 5000)
- [ ] Frontend đang chạy (port 3000)
- [ ] File `.env` tồn tại và có OPENAI_API_KEY (hoặc để trống để test fallback)
- [ ] Không có lỗi trong backend console
- [ ] Không có lỗi trong frontend console
- [ ] API endpoint `/api/ask` trả về response
- [ ] CORS được enable trong backend

## Test Nhanh

1. **Mở browser console (F12)**
2. **Gửi câu hỏi trong chat AI**
3. **Xem Network tab:**
   - Request đến `/api/ask`?
   - Status code là gì? (200 = OK, 500 = Server Error, etc.)
   - Response body là gì?

## Nếu Vẫn Không Hoạt Động

1. Kiểm tra log backend console
2. Kiểm tra log frontend console
3. Kiểm tra file `.env` có đúng format không
4. Thử restart cả backend và frontend

