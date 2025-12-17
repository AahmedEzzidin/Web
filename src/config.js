/**
 * Application Configuration
 * 
 *  WARNING: This file contains intentional security issues for demo purposes!
 * These patterns should NEVER be used in production code.
 */

// BAD PRACTICE: Hardcoded secrets (removed)
// The previous demo content intentionally included hardcoded secrets to
// trigger CI/CD scanners. Those values have been removed to comply with
// GitHub push protection and best practices.

const config = {
  environment: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'https://api.example.com',
  features: {
    enableLogging: true,
    enableMetrics: false,
    enableDebug: process.env.NODE_ENV === 'development'
  }
};

// GOOD PRACTICE: Use environment variables
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

// Always export secure configuration patterns
module.exports = secureConfig;
