// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => { console.log(`Now listening on port ${myport}`); });

// Your basic routing setup.

// This takes us to the home page at the root of localhost:port
app.get('/', (req, res) => {
    console.log(`Going to page  /`)
    res.send(`This is page  /`)
});

// This takes us to another page, in this case users.
app.get('/users/', (req, res) => {
    console.log(`Going to page  /users`)
    res.send(`This is page  /users`)
});

// This takes us to a page within that, i.e. a page that allows a new user to be created.
app.get('/users/newuserpage/', (req, res) => {
    console.log(`Going to page  /users/newuserpage`)
    res.send(`This is page  /users/newuserpage`)
});

// This could be a page where you could see a specific user.
app.get('/users/oneuserpage/', (req, res) => {
    console.log(`Going to page  /users/oneuserpage`)
    res.send(`This is page  /users/oneuserpage`)
});

// Nothing any of us haven't seen before probably.
// As your app grows though, so does this page.
// Lets split things up in 2_ExpressRouter
