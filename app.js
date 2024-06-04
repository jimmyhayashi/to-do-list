// Import the Express module
const express = require('express');
// Import the checklist router module
const checklistRouter = require('./src/routes/checklist');
require('./config/database')

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount the checklist router at the '/checklists' path
app.use('/checklists', checklistRouter);

// Start the server on port 3000
app.listen(3000, () => {
    // Log a message indicating that the server has been initialized
    console.log('Server was initialized');
});
