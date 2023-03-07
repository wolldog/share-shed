const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookingRoutes = require('./booking-routes');

router.use('/users', userRoutes);
router.use('/product', bookingRoutes);

module.exports = router;