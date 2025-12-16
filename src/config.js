/**
 * Application Configuration
 * 
 * ⚠️ WARNING: This file contains intentional security issues for demo purposes!
 * These patterns should NEVER be used in production code.
 */

// ✅ GOOD PRACTICE: Use environment variables only (no hardcoded secrets)
const config = {
  environment: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL || 'https://api.example.com',
  database: {
    url: process.env.DATABASE_URL
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  },
  features: {
    enableLogging: true,
    enableMetrics: false,
    enableDebug: process.env.NODE_ENV === 'development'
  }
};

// Backwards-compatible alias for secure configuration
const secureConfig = config;

// Export secure configuration
module.exports = secureConfig;
