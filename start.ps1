# Script khởi chạy HeyPaaaa
# Chạy cả frontend và backend

Write-Host "🚀 Đang khởi chạy HeyPaaaa..." -ForegroundColor Green

# Kiểm tra file .env
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  File .env chưa tồn tại. Đang tạo từ env.example..." -ForegroundColor Yellow
    Copy-Item env.example .env
    Write-Host "✅ Đã tạo file .env. Vui lòng chỉnh sửa và thêm OPENAI_API_KEY nếu cần." -ForegroundColor Green
}

# Kiểm tra dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Đang cài đặt dependencies frontend..." -ForegroundColor Cyan
    npm install
}

if (-not (Test-Path "server/node_modules")) {
    Write-Host "📦 Đang cài đặt dependencies backend..." -ForegroundColor Cyan
    Set-Location server
    npm install
    Set-Location ..
}

Write-Host ""
Write-Host "✅ Tất cả đã sẵn sàng!" -ForegroundColor Green
Write-Host ""
Write-Host "Để chạy ứng dụng:" -ForegroundColor Yellow
Write-Host "1. Terminal 1: npm run dev:server  (Backend - Port 5000)" -ForegroundColor White
Write-Host "2. Terminal 2: npm run dev         (Frontend - Port 3000)" -ForegroundColor White
Write-Host ""
Write-Host "Hoặc mở 2 terminal riêng và chạy từng lệnh." -ForegroundColor Gray
Write-Host ""

