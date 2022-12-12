//If using the apollo server do these get deleted or commented out?

const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;