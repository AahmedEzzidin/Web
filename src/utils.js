/**
 * Utility Functions
 */

const axios = require('axios');
const config = require('./config');

/**
 * Fetch user data from external API
 * @param {string} userId - The user ID to fetch
 * @returns {Promise<Object>} User data
 */
async function fetchUserData(userId) {
  try {
    // Simulate API call
    const response = await axios.get(`${config.apiUrl}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
}

/**
 * Log activity for auditing
 * @param {string} message - Activity message
 */
function logActivity(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

/**
 * Validate API key format
 * @param {string} key - API key to validate
 * @returns {boolean} True if valid
 */
function validateApiKey(key) {
  // Simple validation for demo
  return key && key.length > 20;
}

module.exports = {
  fetchUserData,
  logActivity,
  validateApiKey
};
