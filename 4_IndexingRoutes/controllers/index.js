const express = require('express');
const router = express.Router();

// This file now serves as an in-between to our app.js,
// and the routes we defined in the users.js file.

// We still need to point to that users file though.
// The code is the same as in the previous version.
// So we've now pulled in that routing logic into this file.
router.use('/users', require('./users.js'));

// We also still need to export this actual file though.
// Otherwise, the app.use in our app.js file has nothing to look for.

module.exports = router;

