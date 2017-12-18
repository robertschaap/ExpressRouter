// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => { console.log(`Now listening on port ${myport}`); });

// Don't stay here long. We've only moved the users.js file into a folder called controllers.
// Because of this, our app can't find the routing file anymore under ./users.js
// Let's just change that to the below

app.use('/users', require('./controllers/users.js'))

// This still takes us to the home page at the root of localhost:port
app.get('/', (req, res) => {
    console.log(`Going to page  /`)
    res.send(`This is page  /`)
});

// The users.js file hasn't changed at all
// We've merely pointed app.use to another folder

// But what if the routes in the controllers folder grow?
// Then our app.js will just grow again.
// So lets split things up even further in the 4th part.
