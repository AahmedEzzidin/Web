# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### 1. Setup Local Environment

```bash
# Clone the repository
git clone <your-repo-url>
cd Web

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### 2. Run the Application Locally

```bash
# Start the server
npm start

# In another terminal, test the API
curl http://localhost:3000
curl http://localhost:3000/health
```

Expected output:
```json
{
  "message": "CI/CD Security Demo API",
  "version": "1.0.0",
  "status": "running"
}
```

### 3. Run Security Scans Locally (Optional)

#### Install TruffleHog:
```bash
# macOS/Linux
brew install trufflesecurity/trufflehog/trufflehog

# Windows
# Download from: https://github.com/trufflesecurity/trufflehog/releases
```

#### Run scans:
```bash
# Scan for secrets
trufflehog filesystem . --json

# Check dependencies
npm audit

# Run both checks
npm run security:check
```

### 4. Setup GitHub Actions

1. **Push to GitHub:**
   ```bash
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Enable GitHub Actions:**
   - Go to your repository on GitHub
   - Click "Actions" tab
   - Enable workflows if prompted

3. **Add Secrets (Optional but recommended):**
   - Go to Settings → Secrets and variables → Actions
   - Add `SNYK_TOKEN` (get free token at snyk.io)

4. **Trigger First Run:**
   ```bash
   # Make a change and push
   git commit --allow-empty -m "Trigger pipeline"
   git push
   ```

5. **View Results:**
   - Go to Actions tab
   - Click on the running workflow
   - Watch the security scans execute

---

## 🎯 Running the Demo

### Demo Scenario 1: Trigger Secret Detection

```bash
# The repo already has secrets in src/config.js
# Just push to trigger detection
git push origin main

# Or create a new branch
git checkout -b test-secrets
git push origin test-secrets
```

### Demo Scenario 2: Fix the Issues

```bash
# Update src/config.js to use environment variables
# Then update package.json dependencies

npm update axios lodash
git add .
git commit -m "Fix: Security issues resolved"
git push
```

---

## 📊 Understanding the Reports

### Secrets Scan Report

Located in: GitHub Actions → Artifacts → `secrets-scan-results`

**What to look for:**
- Types of secrets found
- File locations
- Line numbers
- Severity levels

### Dependency Audit Report

Located in: GitHub Actions → Artifacts → `dependency-audit-results`

**What to look for:**
- CVE identifiers
- CVSS scores
- Affected packages
- Recommended fixes

---

## 🛠️ Customization

### Adjust Security Severity Levels

Edit [.github/workflows/security-scan.yml](.github/workflows/security-scan.yml):

```yaml
# Change audit level (low, moderate, high, critical)
npm audit --audit-level=high

# Change CVSS threshold
--failOnCVSS 7  # Change to 5, 8, or 9
```

### Add Custom Secret Patterns

Edit [.gitleaks.toml](.gitleaks.toml):

```toml
[[rules]]
id = "custom-api-key"
description = "My Custom API Key Pattern"
regex = '''my-api-key-[a-z0-9]{32}'''
```

### Exclude Files from Scanning

Add to `.gitleaks.toml`:

```toml
[allowlist]
paths = [
  '''docs/.*''',
  '''examples/.*'''
]
```

---

## ❓ Troubleshooting

### Pipeline Not Triggering

**Problem:** Push doesn't trigger GitHub Actions

**Solutions:**
1. Check if Actions are enabled: Settings → Actions → "Allow all actions"
2. Verify workflow file is in `.github/workflows/`
3. Check branch protection rules

### Secrets Not Detected

**Problem:** Known secrets not being caught

**Solutions:**
1. Ensure secrets match patterns in `.gitleaks.toml`
2. Check if file is in allowlist
3. Verify TruffleHog configuration

### npm audit Shows Vulnerabilities

**Problem:** Old dependencies with CVEs

**Solutions:**
```bash
# Update specific package
npm update package-name

# Update all packages
npm update

# Check for available updates
npm outdated

# Force update to specific version
npm install package-name@latest
```

### False Positives

**Problem:** Test data flagged as secrets

**Solutions:**
1. Add files to `.gitleaks.toml` allowlist
2. Use clearly fake patterns in examples
3. Comment code to explain why it's safe

---

## 📚 Additional Resources

### Documentation
- [GitHub Actions Docs](https://docs.github.com/actions)
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [TruffleHog](https://github.com/trufflesecurity/trufflehog)
- [GitLeaks](https://github.com/gitleaks/gitleaks)

### Tools
- [Snyk (Free Account)](https://snyk.io)
- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)

### Learning
- [OWASP DevSecOps Guide](https://owasp.org/www-project-devsecops-guideline/)
- [GitHub Learning Lab - Security](https://lab.github.com)

---

## 🎓 Next Steps

1. ✅ Complete the demo scenarios
2. ✅ Review the presentation materials
3. ✅ Customize for your tech stack
4. ✅ Integrate into your real projects
5. ✅ Share with your team

---

## 💡 Pro Tips

- **Start Simple:** Begin with just secrets scanning, add dependency auditing later
- **Gradual Rollout:** Start with warnings, then enforce blocking
- **Team Training:** Schedule a workshop to train developers
- **Monitor Metrics:** Track detection rates and fix times
- **Regular Updates:** Keep security tools and rules updated

---

**Need Help?** Check the main [README.md](README.md) or open an issue in the repository.
