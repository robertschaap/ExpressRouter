// Express Router is a form of middleware right?
// First we need to require it like any middleware or package
const express = require('express');
const router = express.Router();


// Note how below, we're not using app but router.
// That's because we are attaching the logic to the router itself.
// We will export this at the bottom of the page.

// On line 19 of app.js we pointed all routes coming from the browser to this file.
// That means we don't need to type /users/ anymore.
// If we did, the route on line 16 would take us to localhost/users/users

// This takes us to another page, in this case users
router.get('/', (req, res) => {
    console.log(`Going to page  /users`)
    res.send(`This is page  /users`)
});

// This takes us to a page within that, i.e. a page that allows a new user to be created
router.get('/newuserpage/', (req, res) => {
    console.log(`Going to page  /users/newuserpage`)
    res.send(`This is page  /users/newuserpage`)
});

// This could be a page where you could see a specific user
router.get('/oneuserpage/', (req, res) => {
    console.log(`Going to page  /users/oneuserpage`)
    res.send(`This is page  /users/oneuserpage`)
});


// Finally, just like with modules for functions, we need to export the routes.
// Since we've attached the routes direcly to the Router that's as easy as:

module.exports = router;

// Check some of the routes in the browser, all still works.
// This is great, but imagine our app growing a bit more.
// We don't want our main project folder filling up with routing files.
