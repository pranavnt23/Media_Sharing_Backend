const authenticateUser = (req, res, next) => {
    const isLoggedIn = true; 

    if (isLoggedIn) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { authenticateUser };
