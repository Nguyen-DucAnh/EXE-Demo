# ⚡ Quick Deploy Guide - Vercel

## 🚀 Deploy Nhanh Trong 5 Phút

### Bước 1: Push Code Lên GitHub

```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Bước 2: Deploy Trên Vercel

1. Truy cập: https://vercel.com/new
2. Import repository từ GitHub
3. Vercel tự động detect settings
4. Click "Deploy"

### Bước 3: Cấu Hình Environment Variables

1. Vào Project → Settings → Environment Variables
2. Thêm:
   ```
   OPENAI_API_KEY = sk-your-key-here
   OPENAI_MODEL = gpt-3.5-turbo
   ```
3. Save và Redeploy

### Bước 4: Done! ✅

Truy cập URL được cung cấp: `https://your-project.vercel.app`

---

**Xem hướng dẫn chi tiết:** `DEPLOY_VERCEL.md`

