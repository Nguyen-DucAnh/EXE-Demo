# ⚠️ Lỗi 429 - Quota Exceeded

## 🔍 Lỗi Hiện Tại

Bạn đang gặp lỗi: **"429 You exceeded your current quota"**

Đây là lỗi từ **OpenAI API**, có nghĩa là:
- ✅ API key của bạn **hợp lệ**
- ❌ Nhưng đã **vượt quá hạn mức/quota** cho phép
- 💰 Có thể do **chưa nạp tiền** vào tài khoản OpenAI

## 🔧 Giải Pháp

### Cách 1: Kiểm Tra và Nạp Tiền (Nếu muốn dùng AI)

1. **Kiểm tra billing:**
   - Truy cập: https://platform.openai.com/account/billing
   - Đăng nhập với tài khoản có API key
   - Kiểm tra:
     - Có credits/quota còn lại không?
     - Có payment method chưa?
     - Có đủ tiền để sử dụng không?

2. **Nạp tiền (nếu cần):**
   - Thêm payment method
   - Nạp credits vào tài khoản
   - Đợi vài phút để hệ thống cập nhật

3. **Kiểm tra usage:**
   - Xem usage tại: https://platform.openai.com/usage
   - Kiểm tra xem đã dùng hết quota chưa

4. **Restart backend và thử lại:**
   ```bash
   # Ctrl+C để dừng
   npm run dev:server
   ```

### Cách 2: Sử Dụng Fallback Response (Test không cần API)

Nếu bạn chỉ muốn test tính năng mà không muốn nạp tiền:

1. **Để trống API key trong `.env`:**
   ```env
   OPENAI_API_KEY=
   ```

2. **Restart backend:**
   ```bash
   # Ctrl+C để dừng
   npm run dev:server
   ```

3. **Backend sẽ dùng fallback response** (vẫn hoạt động nhưng không thông minh bằng AI thật)

### Cách 3: Sử Dụng Tính Năng Kiến Thức (Không cần API)

Bạn có thể sử dụng tính năng **"Kiến thức"** để tìm kiếm thông tin mà **KHÔNG CẦN API key**:

1. Truy cập: http://localhost:3000/knowledge
2. Tìm kiếm các bài viết về chủ đề bạn quan tâm
3. Đọc chi tiết các bài viết

## 📊 Hiểu Về Quota

- **Free tier:** OpenAI thường cho một số credits miễn phí khi mới đăng ký
- **Paid tier:** Sau khi hết free credits, cần nạp tiền để tiếp tục sử dụng
- **Rate limits:** Có giới hạn số request/giờ

## ✅ Checklist

Sau khi xử lý, kiểm tra:

- [ ] Đã kiểm tra billing tại https://platform.openai.com/account/billing
- [ ] Đã nạp tiền (nếu muốn dùng AI)
- [ ] Đã restart backend
- [ ] Đã refresh browser (F5)
- [ ] Đã thử lại câu hỏi

## 💡 Lưu Ý

- **API có phí:** Sử dụng OpenAI API sẽ tính phí (rất rẻ, khoảng $0.002/1K tokens)
- **Fallback:** Vẫn hoạt động nhưng không thông minh bằng AI thật
- **Kiến thức:** Tính năng tìm kiếm kiến thức hoạt động độc lập, không cần API

## 🎯 Khuyến Nghị

- **Nếu muốn test nhanh:** Dùng fallback response (để trống API key)
- **Nếu muốn trải nghiệm tốt:** Nạp $5-10 vào tài khoản OpenAI (đủ dùng lâu)
- **Nếu chỉ cần thông tin:** Dùng tính năng "Kiến thức"

---

**Chọn cách phù hợp với nhu cầu của bạn!** ✅

