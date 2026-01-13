# Script để setup .env file
Write-Host "`n🔧 Setup .env File`n" -ForegroundColor Cyan

$envFile = ".env"

if (-not (Test-Path $envFile)) {
    Write-Host "⚠️  File .env không tồn tại. Đang tạo từ env.example..." -ForegroundColor Yellow
    Copy-Item env.example $envFile
}

Write-Host "Bạn muốn:" -ForegroundColor Yellow
Write-Host "1. Thêm OpenAI API key thật" -ForegroundColor Green
Write-Host "2. Để trống API key (test với fallback)" -ForegroundColor Green
Write-Host "3. Xem nội dung file .env hiện tại" -ForegroundColor Green
Write-Host "4. Thoát" -ForegroundColor Gray
Write-Host ""

$choice = Read-Host "Chọn (1/2/3/4)"

switch ($choice) {
    "1" {
        Write-Host "`n📝 Hướng dẫn:" -ForegroundColor Cyan
        Write-Host "1. Truy cập: https://platform.openai.com/account/api-keys" -ForegroundColor White
        Write-Host "2. Tạo API key mới" -ForegroundColor White
        Write-Host "3. Copy API key" -ForegroundColor White
        Write-Host ""
        $apiKey = Read-Host "Nhập OpenAI API key (hoặc Enter để bỏ qua)"
        
        if ($apiKey) {
            $content = Get-Content $envFile -Raw
            $content = $content -replace "OPENAI_API_KEY=.*", "OPENAI_API_KEY=$apiKey"
            Set-Content -Path $envFile -Value $content -NoNewline
            Write-Host "✅ Đã cập nhật OPENAI_API_KEY!" -ForegroundColor Green
            Write-Host "🔄 Vui lòng restart backend server (npm run dev:server)`n" -ForegroundColor Yellow
        } else {
            Write-Host "⚠️  Bỏ qua. Không thay đổi gì.`n" -ForegroundColor Yellow
        }
    }
    "2" {
        $content = Get-Content $envFile -Raw
        $content = $content -replace "OPENAI_API_KEY=.*", "OPENAI_API_KEY="
        Set-Content -Path $envFile -Value $content -NoNewline
        Write-Host "✅ Đã để trống OPENAI_API_KEY (sẽ dùng fallback response)" -ForegroundColor Green
        Write-Host "🔄 Vui lòng restart backend server (npm run dev:server)`n" -ForegroundColor Yellow
    }
    "3" {
        Write-Host "`n📄 Nội dung file .env:`n" -ForegroundColor Cyan
        Get-Content $envFile | ForEach-Object {
            if ($_ -match "OPENAI_API_KEY") {
                $key = ($_ -split "=")[1]
                if ($key -and $key -ne "your_openai_api_key_here" -and $key.Length -gt 10) {
                    $masked = $key.Substring(0, 7) + "..." + $key.Substring($key.Length - 4)
                    Write-Host "OPENAI_API_KEY=$masked" -ForegroundColor Yellow
                } else {
                    Write-Host $_ -ForegroundColor Red
                }
            } else {
                Write-Host $_
            }
        }
        Write-Host ""
    }
    "4" {
        Write-Host "👋 Thoát.`n" -ForegroundColor Gray
        exit
    }
    default {
        Write-Host "❌ Lựa chọn không hợp lệ.`n" -ForegroundColor Red
    }
}

