# Frequently Asked Questions (FAQ)

## General Questions

### Q: What is this project about?
**A:** This is a demonstration project showing how to implement security scanning (secrets detection and dependency auditing) in a CI/CD pipeline using GitHub Actions.

### Q: Who is this for?
**A:** This is designed for:
- Students learning about DevSecOps
- Developers wanting to implement pipeline security
- Teams looking to improve their CI/CD security
- Anyone presenting on CI/CD security topics

### Q: Can I use this in production?
**A:** **NO!** This project intentionally contains security vulnerabilities for demonstration purposes. Do NOT deploy this code to production. Use it as a learning template and apply the concepts to your own projects.

---

## Setup & Installation

### Q: What do I need to run this locally?
**A:** You need:
- Node.js 18 or higher
- npm (comes with Node.js)
- Git
- A text editor (VS Code recommended)

### Q: How do I install Node.js?
**A:** Download from [nodejs.org](https://nodejs.org). Choose the LTS (Long Term Support) version.

### Q: The setup script fails. What should I do?
**A:** Try these steps:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Q: Can I use this with languages other than Node.js?
**A:** Yes! The concepts apply to any language. You'd need to:
- Adjust the sample application code
- Modify the CI/CD workflow for your language
- Use appropriate dependency scanning tools (e.g., pip-audit for Python, bundler-audit for Ruby)

---

## GitHub Actions

### Q: How do I enable GitHub Actions?
**A:** 
1. Push your code to GitHub
2. Go to the "Actions" tab in your repository
3. Click "I understand my workflows, go ahead and enable them"

### Q: Why isn't my pipeline running?
**A:** Check:
- GitHub Actions are enabled (Settings → Actions)
- Workflow files are in `.github/workflows/`
- You're pushing to the correct branch (main/develop)
- The YAML syntax is valid

### Q: Can I run this on GitLab/Bitbucket?
**A:** Yes, but you'll need to adapt the workflow files:
- GitLab uses `.gitlab-ci.yml`
- Bitbucket uses `bitbucket-pipelines.yml`
- The security tools remain the same

### Q: Do I need to pay for GitHub Actions?
**A:** GitHub Actions is free for public repositories and includes free minutes for private repositories. Check [GitHub's pricing](https://github.com/pricing) for details.

---

## Security Scanning

### Q: Will the pipeline really detect secrets?
**A:** Yes! The intentional secrets in `src/config.js` will be detected by TruffleHog and GitLeaks when you push to GitHub.

### Q: What if I want to use this with my real code?
**A:** 
1. Remove the demo secrets from `src/config.js`
2. Use environment variables instead
3. Add your `.env` file to `.gitignore`
4. Never commit real credentials

### Q: How do I fix false positives?
**A:** Edit `.gitleaks.toml` to add allowlists:
```toml
[allowlist]
paths = [
  '''test/.*''',
  '''docs/examples/.*'''
]
```

### Q: Can I use Snyk for free?
**A:** Yes! Snyk has a free tier for open source and personal projects. Sign up at [snyk.io](https://snyk.io).

### Q: What's the difference between TruffleHog and GitLeaks?
**A:** 
- **TruffleHog**: Better at verified scanning (checks if secrets are real), deeper git history scanning
- **GitLeaks**: Faster, highly customizable rules, better for custom secret patterns
- **Recommendation**: Use both for comprehensive coverage

---

## Dependencies

### Q: Why are there vulnerable dependencies in package.json?
**A:** Intentionally! This is a demo showing how dependency scanning works. The old versions of `axios` and `lodash` have known vulnerabilities that will be detected.

### Q: How do I fix vulnerable dependencies?
**A:** 
```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Or update manually
npm update axios lodash
```

### Q: What is a CVE?
**A:** CVE (Common Vulnerabilities and Exposures) is a unique identifier for known security vulnerabilities. Example: CVE-2021-3749

### Q: What is CVSS?
**A:** CVSS (Common Vulnerability Scoring System) rates vulnerability severity from 0-10:
- 0.0: None
- 0.1-3.9: Low
- 4.0-6.9: Medium
- 7.0-8.9: High
- 9.0-10.0: Critical

---

## Demo & Presentation

### Q: How long is the presentation?
**A:** 15 minutes for presentation + 10 minutes for demo = 25 minutes total.

### Q: What if I don't have 25 minutes?
**A:** 
- **10-minute version**: Skip to architecture diagram, show one demo scenario
- **5-minute version**: Just run the demo with brief intro

### Q: Can I present without the live demo?
**A:** Yes, but it's less engaging. Consider:
- Pre-recording the demo
- Using screenshots from `DEMO_SCRIPT.md`
- Showing the GitHub Actions logs

### Q: The demo is taking too long. What should I do?
**A:** 
- Speed up by showing pre-recorded footage
- Skip waiting for pipeline completion
- Use the backup screenshots
- Explain what would happen

### Q: What if someone asks a question I can't answer?
**A:** It's okay to say "I don't know, but I'll research that and get back to you." Write it down and follow up later.

---

## Customization

### Q: Can I add more security checks?
**A:** Absolutely! Consider adding:
- **SAST**: Static Application Security Testing
- **Container scanning**: For Docker images
- **License compliance**: Check open source licenses
- **Code quality**: SonarQube, CodeClimate

### Q: How do I add a new secret pattern?
**A:** Edit `.gitleaks.toml`:
```toml
[[rules]]
id = "my-custom-pattern"
description = "My Custom Secret"
regex = '''my-pattern-here'''
```

### Q: Can I use this for my final project?
**A:** Yes! Just make sure to:
1. Remove demo secrets
2. Use your own application code
3. Add proper documentation
4. Credit sources appropriately

---

## Troubleshooting

### Q: npm install fails with permission errors
**A:** 
```bash
# Don't use sudo! Instead, fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Q: Git says "fatal: not a git repository"
**A:** Initialize git first:
```bash
git init
git add .
git commit -m "Initial commit"
```

### Q: The application won't start
**A:** Check:
```bash
# Verify Node.js version
node --version  # Should be 18+

# Check for errors
npm start

# View detailed logs
npm start --verbose
```

### Q: GitHub Actions says "No workflow file"
**A:** Ensure:
- Files are in `.github/workflows/` (note the dot!)
- Files end with `.yml` or `.yaml`
- YAML syntax is correct (use a validator)

---

## Best Practices

### Q: Should I commit my .env file?
**A:** **NO!** Never commit `.env` files. They should be in `.gitignore`. Use `.env.example` as a template instead.

### Q: How often should I run security scans?
**A:** On every commit! That's the point of CI/CD security. Catch issues immediately.

### Q: What's the difference between secrets scanning and dependency auditing?
**A:** 
- **Secrets scanning**: Finds hardcoded credentials in YOUR code
- **Dependency auditing**: Finds vulnerabilities in LIBRARIES you use

### Q: Should I block deployment on all security issues?
**A:** Recommended approach:
- **Critical/High**: Always block
- **Medium**: Block in production, warn in development
- **Low**: Warn, don't block

---

## Advanced Topics

### Q: Can I integrate this with Slack/Teams notifications?
**A:** Yes! Add notification steps to your workflow:
```yaml
- name: Notify Slack
  if: failure()
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Q: How do I scan git history for old secrets?
**A:** Run TruffleHog locally:
```bash
trufflehog filesystem . --since-commit main --json
```

### Q: Can I automate dependency updates?
**A:** Yes! Use GitHub Dependabot:
1. Create `.github/dependabot.yml`
2. Configure update frequency
3. Dependabot will create PRs automatically

### Q: How do I measure the ROI of security scanning?
**A:** Track:
- Secrets detected before production
- Vulnerabilities prevented
- Time saved vs manual reviews
- Incident reduction

---

## Additional Resources

### Q: Where can I learn more?
**A:**
- [OWASP DevSecOps Guide](https://owasp.org/www-project-devsecops-guideline/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [TruffleHog Documentation](https://github.com/trufflesecurity/trufflehog)
- [Snyk Learn](https://learn.snyk.io/)

### Q: Are there certifications for DevSecOps?
**A:** Yes:
- Certified DevSecOps Professional (CDP)
- GIAC Security Essentials (GSEC)
- Certified Kubernetes Security Specialist (CKS)

### Q: Can I contribute to this project?
**A:** Absolutely! Fork the repository and submit pull requests with improvements.

---

## Still Have Questions?

- Check the [README.md](README.md) for detailed documentation
- Review [QUICK_START.md](QUICK_START.md) for setup help
- Read [DEMO_SCRIPT.md](DEMO_SCRIPT.md) for demo guidance
- Open an issue in the GitHub repository

---

**Last Updated:** December 15, 2025
