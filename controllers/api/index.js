const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookingRoutes = require('./booking-routes');
const mapRoutes = require('./map-routes')
const listingRoutes = require('./listing-routes')


router.use('/users', userRoutes);
router.use('/booking', bookingRoutes);
router.use('/maps', mapRoutes);
router.use('/listing', listingRoutes);


module.exports = router;