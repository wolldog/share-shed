const router = require("express").Router();
const { Product, User } = require("../../models");

// Get map data
// ** Owner ID currently hardcoded
router.get("/", async (req, res) => {
  console.log("do we get here?");

  try {
    const dbMapData = await Product.findAll({
      include: [{ model: User }],
      attributes: ["user.lat_lon", "daily_rate"],
    });

    console.log(dbMapData);

    res.render('maps');

    return dbMapData;

    

    // const mapMarkers = dbMapData.map((mapMarker) =>
    // mapMarker.get({ plain: true })
    // );

    // , { mapMarkers });
    // return mapMarkers;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const dbProductData = await Product.findAll({
//       include: [{ model: Category }],
//     });
//     const products = dbProductData.map((product) =>
//       product.get({ plain: true })
//     );
//     res.render("homepage", {
//       products,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
