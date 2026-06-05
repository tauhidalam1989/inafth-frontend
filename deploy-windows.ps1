# Windows Deployment Script for Frontend
# Run this script in PowerShell

Write-Host "=== Screening Frontend Windows Deployment ===" -ForegroundColor Green

# Check if Node.js is installed
Write-Host "`nChecking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check if npm is installed
Write-Host "`nChecking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not installed." -ForegroundColor Red
    exit 1
}

# Check environment file
Write-Host "`nChecking environment configuration..." -ForegroundColor Yellow
if (Test-Path "src/environments/environment.prod.ts") {
    Write-Host "✓ Production environment file found" -ForegroundColor Green
    Write-Host "⚠ Make sure apiUrl in environment.prod.ts points to your backend server" -ForegroundColor Yellow
} else {
    Write-Host "✗ Production environment file not found" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "`nInstalling dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Build the project
Write-Host "`nBuilding Angular application for production..." -ForegroundColor Yellow
npm run build:prod
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build completed successfully" -ForegroundColor Green

# Check if dist folder exists
Write-Host "`nChecking build output..." -ForegroundColor Yellow
if (Test-Path "dist/screening-frontend") {
    Write-Host "✓ Build output found in dist/screening-frontend" -ForegroundColor Green
    $distPath = Resolve-Path "dist/screening-frontend"
    Write-Host "`nBuild output location: $distPath" -ForegroundColor Cyan
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Copy contents of dist/screening-frontend to your IIS website directory" -ForegroundColor White
    Write-Host "2. Ensure web.config is in the root directory for URL rewriting" -ForegroundColor White
    Write-Host "3. Configure IIS to point to the deployment directory" -ForegroundColor White
} else {
    Write-Host "✗ Build output not found" -ForegroundColor Red
    exit 1
}

Write-Host "`n=== Deployment Complete ===" -ForegroundColor Green
Write-Host "Frontend build is ready for deployment to IIS" -ForegroundColor Cyan









