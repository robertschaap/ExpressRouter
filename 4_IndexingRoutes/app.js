// Declarations
const express = require('express');
const app = express();
const myport = process.env.PORT || 3000;

app.listen(myport, () => { console.log(`Now listening on port ${myport}`); });

// On the line below, we've stopped pointing to a specific file.
// The .js suffux was already optional, but by dropping the name entirely,

// We are now just pointing to the Controllers folder.
// Note that we are also not setting a route, we're just requiring the folder.
// By default, if you don't specifcy a file, Express will for an index.js file.
// Go have a look at that file.

app.use(require('./controllers/'))

// This still takes us to the home page at the root of localhost:port
app.get('/', (req, res) => {
    console.log(`Going to page  /`)
    res.send(`This is page  /`)
});
