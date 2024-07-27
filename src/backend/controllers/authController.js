/* eslint-disable no-undef */
// Auth.controller.js
const checkLoginStatus = (req, res) => {
    if (req.session.userId) {
        res.status(200).json({ isLoggedIn: true });
    } else {
        res.status(200).json({ isLoggedIn: false });
    }
};


const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ error: 'Failed to log out' });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
};


module.exports = {
    checkLoginStatus,
    logoutUser
};
