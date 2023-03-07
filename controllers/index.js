const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const mapRoutes = require('./maps.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/maps', mapRoutes);

module.exports = router;
