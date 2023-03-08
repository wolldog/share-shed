const router = require("express").Router();
const { Product, Category } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all products for homepage
router.get("/", async (req, res) => {
  try {
    const dbProductData = await Product.findAll({
      include: [{ model: Category}],
    });
    const products = dbProductData.map((product) =>
      product.get({ plain: true })
    );
    res.render("homepage", {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one product
// Use the custom middleware before allowing the user to access the product detai
// ** TODO - implement middleware**
router.get('/product/:id', withAuth, async (req, res) => {
  try {
    const dbProductData = await Product.findByPk(req.params.id);

    const product = dbProductData.get({ plain: true });

    res.render('product', { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/listing', (req, res) => {
  res.render('listings');
});

module.exports = router;
