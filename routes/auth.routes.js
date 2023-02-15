const router = require("express").Router();

const User = require('../models/User.model.js')
const bcrypt = require('bcryptjs')

router.get('/signup', (req, res, next) => {
    res.render('auth/signup.hbs')
})

router.post('/signup', async (req, res, next) => {

    console.log(req.body)
    const { username, password } = req.body

    try {

        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)

        await User.create({
            username,
            password: hashPassword
        })
        res.redirect('/auth/login')
        
    } catch (error) {
        next(error)
    }
})



module.exports = router