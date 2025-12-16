# Setup Script for CI/CD Security Demo
# This script helps you set up the project quickly

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "CI/CD Security Demo - Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js installation
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
Write-Host ""

try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Please install Node.js 18+ from https://nodejs.org" -ForegroundColor Red
    exit 1
}

try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm not found. Please install npm" -ForegroundColor Red
    exit 1
}

try {
    $gitVersion = git --version
    Write-Host "✓ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git not found. Please install Git from https://git-scm.com" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Installing Dependencies" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Install dependencies
Write-Host "Running npm install..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Creating Environment File" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create .env file if it doesn't exist
if (!(Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✓ Created .env file from template" -ForegroundColor Green
    Write-Host "  Note: Update .env with your actual values" -ForegroundColor Yellow
} else {
    Write-Host "✓ .env file already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Running Security Checks" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Run npm audit
Write-Host "Running npm audit..." -ForegroundColor Yellow
npm audit --production

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "✓ All prerequisites installed" -ForegroundColor Green
Write-Host "✓ Dependencies installed" -ForegroundColor Green
Write-Host "✓ Environment configured" -ForegroundColor Green
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Review the README.md for project overview" -ForegroundColor White
Write-Host "2. Read PRESENTATION.md for presentation content" -ForegroundColor White
Write-Host "3. Follow DEMO_SCRIPT.md for live demo instructions" -ForegroundColor White
Write-Host "4. Check QUICK_START.md for quick setup guide" -ForegroundColor White
Write-Host ""

Write-Host "To start the application:" -ForegroundColor Cyan
Write-Host "  npm start" -ForegroundColor White
Write-Host ""

Write-Host "To run security scans locally:" -ForegroundColor Cyan
Write-Host "  npm audit" -ForegroundColor White
Write-Host ""

Write-Host "To push to GitHub and enable Actions:" -ForegroundColor Cyan
Write-Host "  git init" -ForegroundColor White
Write-Host "  git add ." -ForegroundColor White
Write-Host '  git commit -m "Initial commit"' -ForegroundColor White
Write-Host "  git remote add origin <your-repo-url>" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor White
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Happy Presenting! 🚀" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
