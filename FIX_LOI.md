# 🔧 Đã Sửa Lỗi "Cannot GET /"

## ✅ Vấn Đề Đã Được Sửa

Lỗi "Cannot GET /" xảy ra vì backend server không có route cho root path. Đã thêm route để hiển thị thông tin API.

## 🚀 Cách Khắc Phục

### Bước 1: Dừng Backend Server (nếu đang chạy)

Trong terminal đang chạy `npm run dev:server`, nhấn:
```
Ctrl + C
```

### Bước 2: Khởi Động Lại Backend

```bash
npm run dev:server
```

Bây giờ khi truy cập `http://localhost:5000`, bạn sẽ thấy thông tin API thay vì lỗi.

## ✅ Kiểm Tra

1. **Mở browser:** http://localhost:5000
2. **Bạn sẽ thấy:**
   ```json
   {
     "message": "BỐCÓMẶT API Server",
     "version": "1.0.0",
     "endpoints": {...}
   }
   ```

3. **Test API:**
   - http://localhost:5000/api/health
   - http://localhost:5000/api/knowledge

## 📝 Lưu Ý

- **Backend (port 5000):** Chỉ là API server, không phải web app
- **Frontend (port 3000):** Đây mới là web app để sử dụng
- **Để dùng Chat AI:** Truy cập http://localhost:3000/assistant (KHÔNG phải localhost:5000)

## 🎯 Đúng Cách Sử Dụng

1. **Backend chạy tại:** http://localhost:5000 (API server)
2. **Frontend chạy tại:** http://localhost:3000 (Web app)
3. **Truy cập Chat AI:** http://localhost:3000/assistant

---

**Sau khi restart backend, lỗi sẽ biến mất!** ✅

