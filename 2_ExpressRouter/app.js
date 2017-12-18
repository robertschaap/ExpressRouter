// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => { console.log(`Now listening on port ${myport}`); });

// Express router is considered middle-ware.
// Think of it as sitting between the request from the client and your application.
// Simply put its just redirecting requests based on what you have defined.

// For this, we've split our User related routes to user.js.
// Your app.js needs to know this file exists:

// The below looks at routes starting with /users
// To do so, it uses the logic you define in /users.js
// This is shorthand for const usersvariable = require('/users') with app.use('/users', usersvariable)

app.use('/users', require('./users.js'))

// This still takes us to the home page at the root of localhost:port
app.get('/', (req, res) => {
    console.log(`Going to page  /`)
    res.send(`This is page  /`)
});

// Have a look in the users.js file before you run app.js.
