const router = require('express').Router();

const userRoutes = require('./user-routes');
const mapRoutes = require('./maps');

router.use('/users', userRoutes);
router.use('/maps', mapRoutes);

module.exports = router;