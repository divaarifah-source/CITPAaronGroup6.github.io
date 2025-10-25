# One-click starter: tries Python then npx
# Run from project root in PowerShell:
# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; .\start.ps1

function Start-Python {
  if (Get-Command py -ErrorAction SilentlyContinue) {
    Write-Host "Starting Python (py) http.server on 127.0.0.1:8080"
    Start-Process -NoNewWindow -FilePath "py" -ArgumentList "-3","-m","http.server","8080","--bind","127.0.0.1"
    return $true
  }
  if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "Starting Python (python) http.server on 127.0.0.1:8080"
    Start-Process -NoNewWindow -FilePath "python" -ArgumentList "-m","http.server","8080","--bind","127.0.0.1"
    return $true
  }
  return $false
}

function Start-Npx {
  if (Get-Command npx -ErrorAction SilentlyContinue) {
    Write-Host "Starting npx http-server on 127.0.0.1:8080"
    Start-Process -NoNewWindow -FilePath "npx" -ArgumentList "http-server","-p","8080"
    return $true
  }
  return $false
}

if (-not (Start-Python)) {
  if (-not (Start-Npx)) {
    Write-Host "ERROR: No Python or npx found on PATH."
    Write-Host "Install Python 3 or Node.js (which includes npx) and re-run this script."
    exit 1
  }
}

Write-Host "Server start attempted. Open http://127.0.0.1:8080/exec.html in your browser."
