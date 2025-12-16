/**
 * Application Configuration
 * 
 * ⚠️ WARNING: This file contains intentional security issues for demo purposes!
 * These patterns should NEVER be used in production code.
 */

// ❌ BAD PRACTICE: Hardcoded secrets (will be caught by secrets scanner)
const config = {
  environment: process.env.NODE_ENV || 'development',
  
  // DEMO SECRET #1: Hardcoded API Key
  apiKey: 'REDACTED_STRIPE_KEY',
  
  // DEMO SECRET #2: AWS Credentials
  aws: {
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-east-1'
  },
  
  // DEMO SECRET #3: Database connection string
  database: {
    url: 'mongodb://admin:SuperSecretPassword123@localhost:27017/mydb'
  },
  
  // DEMO SECRET #4: GitHub Personal Access Token
  github: {
    token: 'ghp_1234567890abcdefghijklmnopqrstuvwxyz'
  },
  
  // DEMO SECRET #5: Private SSH Key (partial for demo)
  sshKey: '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA1234567890...',
  
  // Safe configuration
  apiUrl: process.env.API_URL || 'https://api.example.com',
  
  features: {
    enableLogging: true,
    enableMetrics: false,
    enableDebug: process.env.NODE_ENV === 'development'
  }
};

// ✅ GOOD PRACTICE: Use environment variables
const secureConfig = {
  environment: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY,
  database: {
    url: process.env.DATABASE_URL
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  }
};

// For demo purposes, export the insecure config
// In production, always use secureConfig!
module.exports = config;

// Uncomment below to use secure configuration:
// module.exports = secureConfig;
