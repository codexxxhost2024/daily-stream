// utils/memory.js

import MemoryClient from 'mem0ai';

// Initialize the MemoryClient with your API credentials.
// For production, consider storing sensitive keys in environment variables.
const memoryClient = new MemoryClient({
  apiKey: "m0-gJaUHKo1jQp5iEVGoIVnNN2I3ehPZrMnF61GOJpz",
  organizationId: "org_JtBrH6s6W1CmOQbZMQw5pO2m6sEMUi90dWr8AR71",
  projectId: "proj_HBRJqboNjEBSGjS3vEf97BDDWm4bEqcESKvit36E"
});

export default memoryClient;
