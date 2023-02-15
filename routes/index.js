const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Auth Routes
router.use('/auth', require('./auth.routes.js'))

// Logged Users Routes
router.use('/profile', require('./users.routes.js'))

module.exports = router;
