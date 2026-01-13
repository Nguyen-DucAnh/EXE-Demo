# 🔧 Cách Sửa Lỗi "API key không hợp lệ"

## ⚠️ Lỗi Hiện Tại

Bạn đang thấy lỗi: **"API key không hợp lệ"**

Điều này có nghĩa là file `.env` có API key không hợp lệ (có thể vẫn là giá trị mẫu).

## ✅ Giải Pháp

### Cách 1: Thêm API Key Thật (Khuyến nghị nếu muốn dùng AI)

1. **Lấy API Key:**
   - Truy cập: https://platform.openai.com/account/api-keys
   - Đăng nhập/Đăng ký
   - Click "Create new secret key"
   - Copy key (chỉ hiện 1 lần!)

2. **Mở file `.env`** (trong thư mục gốc của project)

3. **Cập nhật dòng OPENAI_API_KEY:**
   ```env
   OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
   ```
   (Thay `sk-proj-...` bằng key thật của bạn)

4. **Lưu file**

5. **Khởi động lại backend:**
   ```bash
   # Trong terminal đang chạy backend, nhấn Ctrl+C
   # Sau đó chạy lại:
   npm run dev:server
   ```

6. **Refresh browser (F5)**

### Cách 2: Để Trống API Key (Test với Fallback)

Nếu bạn chỉ muốn test tính năng mà không cần AI thật:

1. **Mở file `.env`**

2. **Để trống hoặc xóa dòng OPENAI_API_KEY:**
   ```env
   OPENAI_API_KEY=
   ```
   Hoặc xóa dòng này đi

3. **Lưu file**

4. **Khởi động lại backend:**
   ```bash
   # Ctrl+C để dừng
   npm run dev:server
   ```

5. **Refresh browser (F5)**

   ⚠️ Lưu ý: Với cách này, bạn sẽ nhận được fallback response (không thông minh bằng AI thật)

## 📝 File .env Mẫu

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-actual-key-here
OPENAI_MODEL=gpt-3.5-turbo

# Server Configuration
PORT=5000

# Frontend API Base URL
VITE_API_BASE_URL=http://localhost:5000/api
```

## ✅ Sau Khi Sửa

1. ✅ Đảm bảo backend đã restart
2. ✅ Refresh browser (F5)
3. ✅ Thử gửi câu hỏi: "Xin chào"
4. ✅ Kiểm tra:
   - Có API key hợp lệ → Nhận câu trả lời từ AI
   - Không có API key → Nhận fallback response

## 🔍 Kiểm Tra

Sau khi sửa, test bằng cách:

```powershell
# Test backend
curl http://localhost:5000/api/health

# Test AI endpoint (nếu có API key)
.\test-ai.ps1
```

## 💡 Lưu Ý

- **API key có phí:** Sử dụng OpenAI API sẽ tính phí (rất rẻ cho test)
- **Bảo mật:** KHÔNG commit file `.env` lên git
- **Fallback:** Vẫn hoạt động nhưng không thông minh bằng AI thật
- **Kiến thức:** Có thể dùng tính năng "Kiến thức" mà không cần API key

---

**Chọn cách phù hợp với bạn và làm theo các bước trên!** ✅

