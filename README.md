# CI/CD Pipeline Security - Secrets Scanning & Dependency Audit

> **🌟 New to this project? Start here:** [START_HERE.md](START_HERE.md) - Your complete guide to getting started!

## 🎯 Project Overview

This project demonstrates implementing security measures in a CI/CD pipeline, specifically:
- **Secrets Scanning**: Detecting hardcoded credentials, API keys, and sensitive data
- **Dependency Audit**: Identifying vulnerable dependencies in the project

## 📋 Table of Contents

- [Why This Matters](#why-this-matters)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Demo](#running-the-demo)
- [Security Tools Used](#security-tools-used)
- [Presentation & Demo](#presentation--demo)

## 🚨 Why This Matters

### The Problem
- **Secrets Leakage**: Over 6 million secrets leaked on GitHub in 2023
- **Vulnerable Dependencies**: 84% of codebases contain at least one known vulnerability
- **Supply Chain Attacks**: Increasing threats through compromised dependencies

### The Solution
Integrate security scanning directly into your CI/CD pipeline to:
- ✅ Catch secrets before they reach production
- ✅ Block deployments with known vulnerabilities
- ✅ Automate security checks without manual intervention
- ✅ Shift security left in the development lifecycle

## 📁 Project Structure

```
.
├── README.md                          # This file
├── DEMO_SCRIPT.md                     # Step-by-step demo instructions
├── PRESENTATION.md                    # Presentation content and slides
├── src/
│   ├── app.js                        # Sample Node.js application
│   ├── config.js                     # Configuration file (with demo secrets)
│   └── utils.js                      # Utility functions
├── .github/
│   └── workflows/
│       ├── security-scan.yml         # Main security pipeline
│       └── ci.yml                    # Standard CI pipeline
├── package.json                       # Node.js dependencies
├── .gitignore                        # Git ignore file
└── diagrams/
    └── architecture.svg              # Architecture diagram

```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account (for Actions)
- Basic understanding of CI/CD concepts

### Local Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

4. **Run security scans locally**
   ```bash
   npm run scan:secrets
   npm run audit:dependencies
   ```

## 🔍 Security Tools Used

### 1. Secrets Scanning
- **TruffleHog**: Detects secrets in code, commits, and files
- **GitLeaks**: Fast secrets scanner with customizable rules
- Scans for:
  - API keys
  - AWS credentials
  - Private keys
  - Database passwords
  - OAuth tokens

### 2. Dependency Audit
- **npm audit**: Built-in Node.js security auditing
- **Snyk**: Advanced vulnerability detection
- **OWASP Dependency-Check**: Identifies known vulnerable components
- Checks for:
  - Known CVEs
  - Outdated packages
  - License compliance
  - Transitive dependencies

## 🎬 Running the Demo

### Scenario 1: Secrets Detection
1. Commit contains hardcoded API key
2. Pipeline detects the secret
3. Build fails with detailed report
4. Developer fixes the issue

### Scenario 2: Vulnerable Dependency
1. Project uses package with known CVE
2. Dependency audit catches the vulnerability
3. Pipeline blocks deployment
4. Automated PR suggests fix

### Scenario 3: Clean Pipeline
1. Code has no secrets
2. All dependencies are secure
3. Pipeline passes all checks
4. Deployment proceeds

## 📊 Architecture

The security pipeline follows this flow:

```
Code Push → Checkout → Secrets Scan → Dependency Audit → Tests → Deploy
                ↓              ↓
              FAIL           FAIL
                ↓              ↓
            Block Deploy   Block Deploy
```

## 📚 Deliverables

1. **Code Repository**: Complete working demo with security pipeline
2. **Presentation**: [PRESENTATION.md](PRESENTATION.md) - 15-minute presentation material
3. **Demo Script**: [DEMO_SCRIPT.md](DEMO_SCRIPT.md) - 10-minute live demo guide

## 🎓 Learning Objectives

After this demo, you will understand:
- How to integrate secrets scanning in CI/CD
- How to implement dependency auditing
- Best practices for pipeline security
- How to handle security failures in CI/CD
- Tools and techniques for automated security

## 🔗 Additional Resources

- [OWASP CI/CD Security Guide](https://owasp.org)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [NIST Secure Software Development Framework](https://csrc.nist.gov)

## 📝 License

This project is for educational purposes.

---

**Note**: This project intentionally contains security issues for demonstration purposes. Do NOT use the code patterns shown here in production environments.
