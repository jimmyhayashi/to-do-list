// Import the Express module
const express = require('express');

// Create a new router object
const router = express.Router();

// Define a route handler for GET requests to the root URL of this router ('/')
router.get('/', (req, res) => {
    // Log a message to the console
    console.log('Hello');
    // Send an empty response
    res.send();
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`);
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`PUT ID: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.send(`DELETE ID: ${req.params.id}`)
})

// Export the router object so it can be used in other parts of the application
module.exports = router;
