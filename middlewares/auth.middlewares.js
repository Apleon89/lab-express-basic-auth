
const alreadyLogged = (req, res, next) => {

    if ( req.session.User === undefined) {
        res.redirect('/')
    } else {
        next()
    }
}

module.exports = {
    alreadyLogged
}