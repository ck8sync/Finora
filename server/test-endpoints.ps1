# Test both endpoints
Write-Host "Testing root endpoint..."
try {
    $root = Invoke-RestMethod -Uri "http://localhost:5000/" -Method Get
    Write-Host "Root response:" -ForegroundColor Green
    $root | ConvertTo-Json
} catch {
    Write-Host "Root error: $_" -ForegroundColor Red
}

Write-Host "`nTesting health endpoint..."
try {
    $health = Invoke-RestMethod -Uri "http://localhost:5000/api/health" -Method Get
    Write-Host "Health response:" -ForegroundColor Green
    $health | ConvertTo-Json
} catch {
    Write-Host "Health error: $_" -ForegroundColor Red
}