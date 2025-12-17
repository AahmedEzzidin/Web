/**
 * Utility Functions
 */

// Use native fetch (Node.js >=18) to avoid axios CVEs
const config = require('./config');

/**
 * Fetch user data from external API
 * @param {string} userId - The user ID to fetch
 * @returns {Promise<Object>} User data
 */
async function fetchUserData(userId) {
  try {
    const url = `${config.apiUrl}/users/${userId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`HTTP ${response.status}: ${body}`);
    }

    const data = await response.json();
    return data;
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
