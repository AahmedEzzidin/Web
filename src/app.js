/**
 * CI/CD Security Demo Application
 * 
 * This is a sample Express.js application that demonstrates
 * security issues that should be caught by CI/CD pipeline.
 */

const express = require('express');
const config = require('./config');
const { fetchUserData, logActivity } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'CI/CD Security Demo API',
    version: '1.0.0',
    status: 'running'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// User endpoint (demonstrates API usage)
app.get('/api/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    logActivity(`Fetching user ${userId}`);
    
    const userData = await fetchUserData(userId);
    res.json(userData);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch user data',
      message: error.message
    });
  }
});

// Configuration endpoint (for demo purposes)
app.get('/api/config', (req, res) => {
  res.json({
    environment: config.environment,
    apiUrl: config.apiUrl,
    features: config.features
    // Note: Secrets should NEVER be exposed in API responses
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${config.environment}`);
  console.log(`🔒 Security Demo Mode: Active`);
});

module.exports = app;
