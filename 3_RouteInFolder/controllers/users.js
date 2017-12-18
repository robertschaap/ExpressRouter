const express = require('express');
const router = express.Router();

// Here nothing has actually changed.
// We've pointed app.use to this file sitting in the folder.
// Express Router still sits in between the request and our logic.

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


module.exports = router;

