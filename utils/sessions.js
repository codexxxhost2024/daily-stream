// utils/session.js

import memoryClient from './memory';

/**
 * Save session context for a given sessionId.
 * @param {string} sessionId - Unique identifier for the session (e.g., "missE-session").
 * @param {object} contextData - Data to store as the session context.
 */
export async function saveSessionContext(sessionId, contextData) {
  try {
    // Store contextData using the memory client.
    await memoryClient.set(sessionId, contextData);
    console.log("Session context saved successfully!");
  } catch (error) {
    console.error("Error saving session context:", error);
  }
}

/**
 * Retrieve session context for a given sessionId.
 * @param {string} sessionId - Unique identifier for the session.
 * @returns {object} - The retrieved session context or an empty object.
 */
export async function getSessionContext(sessionId) {
  try {
    const contextData = await memoryClient.get(sessionId);
    return contextData || {};
  } catch (error) {
    console.error("Error retrieving session context:", error);
    return {};
  }
}

/**
 * Update session context by merging new data into the existing context.
 * @param {string} sessionId - Unique identifier for the session.
 * @param {object} newData - New data to merge into the session context.
 * @returns {object|null} - The updated context, or null if an error occurred.
 */
export async function updateSessionContext(sessionId, newData) {
  try {
    const currentContext = await getSessionContext(sessionId);
    // Merge current context with newData (newData values overwrite current ones if keys match)
    const updatedContext = { ...currentContext, ...newData };
    await memoryClient.set(sessionId, updatedContext);
    console.log("Session context updated successfully!");
    return updatedContext;
  } catch (error) {
    console.error("Error updating session context:", error);
    return null;
  }
}

/**
 * Delete the session context for a given sessionId.
 * (Ensure that the MemoryClient supports a delete method; consult mem0.ai docs.)
 * @param {string} sessionId - Unique identifier for the session.
 */
export async function deleteSessionContext(sessionId) {
  try {
    if (typeof memoryClient.delete === 'function') {
      await memoryClient.delete(sessionId);
      console.log("Session context deleted successfully!");
    } else {
      console.warn("Delete method not supported by MemoryClient.");
    }
  } catch (error) {
    console.error("Error deleting session context:", error);
  }
}
