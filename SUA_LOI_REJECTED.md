# ✅ Đã Sửa Lỗi "Rejected"

## 🔧 Vấn Đề

Lỗi "Rejected" xảy ra vì error message không được hiển thị đúng cách. Khi dùng `rejectWithValue` trong Redux Toolkit, error message nằm trong `action.payload`, không phải `action.error.message`.

## ✅ Đã Sửa

Đã cập nhật code trong `src/store/slices/aiSlice.ts` để hiển thị error message đúng cách.

## 🔄 Cách Áp Dụng

1. **Refresh trang browser** (F5 hoặc Ctrl+R)
2. **Thử gửi câu hỏi lại**

Bây giờ bạn sẽ thấy error message chi tiết thay vì chỉ "Rejected".

## 🔍 Kiểm Tra Backend

Nếu vẫn gặp lỗi, kiểm tra:

### 1. Backend có đang chạy?

Mở terminal và kiểm tra:
```bash
# Kiểm tra process
Get-Process -Name node

# Hoặc test endpoint
curl http://localhost:5000/api/health
```

### 2. Test API endpoint

Chạy script test:
```powershell
.\test-ai.ps1
```

Hoặc test thủ công:
```powershell
$body = @{ question = "Xin chào" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:5000/api/ask" -Method Post -Body $body -ContentType "application/json"
```

### 3. Kiểm tra .env

Đảm bảo file `.env` có:
```env
OPENAI_API_KEY=your-key-here
PORT=5000
```

**Lưu ý:** Nếu chưa có OpenAI API key, bạn vẫn có thể test với fallback response.

## 📝 Error Messages Có Thể Gặp

Sau khi sửa, bạn sẽ thấy các error message rõ ràng hơn:

- ✅ "Không thể kết nối đến server. Vui lòng đảm bảo backend đang chạy tại http://localhost:5000"
- ✅ "Server error" (nếu có lỗi từ server)
- ✅ "Invalid response from server" (nếu response không đúng format)

## 🎯 Next Steps

1. Refresh browser (F5)
2. Thử gửi câu hỏi: "Xin chào"
3. Xem error message chi tiết (nếu có)
4. Kiểm tra backend console log
5. Kiểm tra browser console (F12)

---

**Sau khi refresh, error message sẽ rõ ràng hơn!** ✅

