// Import the Express module
const express = require('express');
const path = require('path');

// Import the checklist router module
const checklistRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

require('./config/database')

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklists', checklistRouter)

// Mount the checklist router at the '/checklists' path
app.use('/checklists', checklistRouter);

// Start the server on port 3000
app.listen(3000, () => {
    // Log a message indicating that the server has been initialized
    console.log('Server was initialized');
});
