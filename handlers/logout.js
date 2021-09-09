
function logoutHandler(req, res) {
    res.clearCookie('user');
    res.redirect('/')

}
module.exports = logoutHandler;