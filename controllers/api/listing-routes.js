const router = require('express').Router();
const { Product, User } = require('../../models');

// CREATE new listing
// ** Owner ID currently hardcoded
router.post('/', async (req, res) => {
  
  try {
    const dbListingData = await Product.create({
      product_name: req.body.product_name,
      owner_id: 1,
      category_id: req.body.category,
      product_make: req.body.make,
      product_model: req.body.model,
      daily_rate: parseInt(req.body.rate),
      user_manual: req.body.manual,
      description: req.body.description,
      
    });

      res.status(200).json(dbListingData);
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;