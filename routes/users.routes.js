const router = require("express").Router();

const User = require('../models/User.model.js')

const { alreadyLogged } = require('../middlewares/auth.middlewares.js')

router.get('/', alreadyLogged, (req, res, next) => {

    res.render('profile/main.hbs')

})

router.get('/private', alreadyLogged, (req, res, next) => {

    res.render('profile/private.hbs')

})



module.exports = router;