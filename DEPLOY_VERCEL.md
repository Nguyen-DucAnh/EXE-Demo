# 🚀 Hướng Dẫn Deploy Lên Vercel

## 📋 Tổng Quan

Dự án này có cả **frontend** và **backend**, nên cần deploy cả hai phần lên Vercel.

## 🎯 Cách 1: Deploy Full-Stack Lên Vercel (Khuyến nghị)

Vercel hỗ trợ deploy cả frontend và backend API routes.

### Bước 1: Chuẩn Bị

1. **Đăng ký tài khoản Vercel:**
   - Truy cập: https://vercel.com
   - Đăng nhập bằng GitHub/GitLab/Bitbucket

2. **Cài đặt Vercel CLI (tùy chọn):**
   ```bash
   npm i -g vercel
   ```

### Bước 2: Cấu Hình Project

File `vercel.json` đã được tạo với cấu hình phù hợp.

### Bước 3: Deploy

#### Cách A: Deploy Từ Vercel Dashboard (Dễ nhất)

1. **Push code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy trên Vercel:**
   - Truy cập: https://vercel.com/new
   - Import repository từ GitHub
   - Vercel sẽ tự động detect và cấu hình

3. **Cấu hình Environment Variables:**
   - Vào Settings → Environment Variables
   - Thêm các biến:
     ```
     OPENAI_API_KEY=sk-your-key-here
     OPENAI_MODEL=gpt-3.5-turbo
     NODE_ENV=production
     ```

4. **Deploy:**
   - Click "Deploy"
   - Đợi build và deploy xong

#### Cách B: Deploy Từ CLI

```bash
# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

### Bước 4: Cấu Hình Environment Variables

Trong Vercel Dashboard:
1. Vào Project → Settings → Environment Variables
2. Thêm:
   - `OPENAI_API_KEY`: API key của bạn
   - `OPENAI_MODEL`: `gpt-3.5-turbo` (tùy chọn)
3. Save và redeploy

### Bước 5: Cập Nhật Frontend API URL

Sau khi deploy, Vercel sẽ cung cấp URL như: `https://your-project.vercel.app`

Frontend sẽ tự động sử dụng relative URLs (`/api`) nên không cần thay đổi gì.

## 🎯 Cách 2: Deploy Frontend + Backend Riêng

Nếu muốn tách riêng:

### Frontend trên Vercel

1. Deploy như bình thường
2. Cấu hình `VITE_API_BASE_URL` trong Environment Variables

### Backend trên Railway/Render (Miễn phí)

**Railway:**
1. Truy cập: https://railway.app
2. New Project → Deploy from GitHub
3. Chọn repository
4. Set root directory: `server`
5. Add environment variables

**Render:**
1. Truy cập: https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Build command: `cd server && npm install`
5. Start command: `node index.js`
6. Add environment variables

## 📝 Checklist Deploy

- [ ] Code đã được push lên GitHub
- [ ] Vercel account đã được tạo
- [ ] Project đã được import vào Vercel
- [ ] Environment variables đã được cấu hình
- [ ] Build thành công
- [ ] Test các endpoints API
- [ ] Test frontend

## 🔍 Kiểm Tra Sau Khi Deploy

1. **Test Health Check:**
   ```
   https://your-project.vercel.app/api/health
   ```

2. **Test Knowledge API:**
   ```
   https://your-project.vercel.app/api/knowledge
   ```

3. **Test Frontend:**
   ```
   https://your-project.vercel.app
   ```

4. **Test AI Assistant:**
   - Truy cập: `https://your-project.vercel.app/assistant`
   - Gửi câu hỏi test

## ⚠️ Lưu Ý Quan Trọng

1. **Environment Variables:**
   - PHẢI cấu hình `OPENAI_API_KEY` trong Vercel
   - KHÔNG commit file `.env` lên git

2. **Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **API Routes:**
   - Vercel sẽ tự động detect API routes từ `api/` folder
   - Hoặc từ `vercel.json` config

4. **CORS:**
   - Đã được cấu hình trong code
   - Vercel sẽ handle CORS tự động

5. **File Size:**
   - Vercel có giới hạn 50MB cho serverless functions
   - Knowledge base JSON nhỏ nên không vấn đề

## 🐛 Troubleshooting

### Build Failed

- Kiểm tra build logs trong Vercel
- Đảm bảo tất cả dependencies đã được cài đặt
- Kiểm tra Node.js version (Vercel dùng Node 18+)

### API Not Working

- Kiểm tra Environment Variables đã được set
- Kiểm tra API routes trong `vercel.json`
- Xem logs trong Vercel Dashboard

### CORS Errors

- Đã được xử lý trong code
- Vercel tự động handle CORS

## 📚 Tài Liệu Tham Khảo

- Vercel Docs: https://vercel.com/docs
- Vercel Serverless Functions: https://vercel.com/docs/functions
- Environment Variables: https://vercel.com/docs/environment-variables

---

**Chúc bạn deploy thành công!** 🎉

