# 🔑 Hướng Dẫn Cấu Hình OpenAI API Key

## ⚠️ Lỗi Hiện Tại

Bạn đang gặp lỗi: **"401 Incorrect API key provided"**

Điều này có nghĩa là API key trong file `.env` chưa được cập nhật (vẫn là giá trị mẫu).

## 🔧 Cách Sửa

### Cách 1: Thêm OpenAI API Key (Khuyến nghị)

1. **Lấy API Key từ OpenAI:**
   - Truy cập: https://platform.openai.com/account/api-keys
   - Đăng nhập hoặc tạo tài khoản
   - Tạo API key mới

2. **Cập nhật file `.env`:**
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   OPENAI_MODEL=gpt-3.5-turbo
   PORT=5000
   ```

3. **Khởi động lại backend:**
   ```bash
   # Dừng backend (Ctrl+C)
   # Chạy lại
   npm run dev:server
   ```

### Cách 2: Sử Dụng Không Cần API Key (Test)

Nếu bạn chưa có API key hoặc chỉ muốn test, bạn có thể:

1. **Để trống OPENAI_API_KEY trong `.env`:**
   ```env
   OPENAI_API_KEY=
   OPENAI_MODEL=gpt-3.5-turbo
   PORT=5000
   ```

2. **Backend sẽ sử dụng fallback response** - vẫn có thể test được!

3. **Khởi động lại backend:**
   ```bash
   npm run dev:server
   ```

## ✅ Sau Khi Cấu Hình

1. **Refresh browser** (F5)
2. **Thử gửi câu hỏi:** "Xin chào"
3. **Kiểm tra:**
   - Nếu có API key hợp lệ: Sẽ nhận được câu trả lời từ AI
   - Nếu không có API key: Sẽ nhận được fallback response

## 💡 Lưu Ý

- **API key có phí:** Sử dụng OpenAI API sẽ tính phí (rất rẻ cho testing)
- **Fallback response:** Vẫn hoạt động nhưng không thông minh bằng AI thật
- **Bảo mật:** KHÔNG commit file `.env` lên git (đã có trong .gitignore)

## 🎯 Tùy Chọn

Bạn có thể:
- ✅ Dùng API key thật để có trải nghiệm tốt nhất
- ✅ Dùng fallback response để test tính năng
- ✅ Dùng tính năng "Kiến thức" (không cần API key)

---

**Chọn cách phù hợp với bạn!** 🚀

