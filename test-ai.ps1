# Script test AI endpoint
Write-Host "🧪 Testing AI Endpoint..." -ForegroundColor Cyan

$body = @{
    question = "Xin chào"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:5000/api/ask" -Method Post -Body $body -ContentType "application/json"
    Write-Host "✅ Success!" -ForegroundColor Green
    Write-Host "Answer: $($response.answer)" -ForegroundColor Yellow
}
catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Đảm bảo backend server đang chạy:" -ForegroundColor Yellow
    Write-Host "   npm run dev:server" -ForegroundColor White
}

