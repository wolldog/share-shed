const router = require('express').Router();
const { User, Product, Category } = require('../../models');

// CREATE new listing
router.post('/', async (req, res) => {
  try {
    const dbListingData = await Product.create({
      product_name: req.body.product_name,
    //   category: req.body.category,
      product_make: req.body.make,
      product_model: req.body.model,
      daily_rate: req.body.rate,
      user_manual: req.body.manual,
      description: req.body.description,
      
    });

      res.status(200).json(dbListingData);
    })

    catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});