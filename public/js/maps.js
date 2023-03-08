const router = require("express").Router();
const { User, Product, Category } = require("../models");
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


function getAllLoc(){
  //get location data and then return it

  var prodData = router.get("/", async (req, res) => {
    try {
      const dbProductData = await Product.findAll({
        attributes: ['daily_rate', 'user_id']
      });
      
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  var userloc = router.get("/", async (req, res) => {
    try {
      const dbLocdata = await User.findAll({
        attributes: ['address']
      });
      
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  for(var i = 0; i<userloc.length;i++){
    vargeocodedloc = `https://maps.googleapis.com/maps/api/geocode/json?address= ` + `&key=YOUR_API_KEY`
  }
  

}
function getPwLoc(){
  
}
function getGdLoc(){
  
}
function getClLoc(){
  
}
function getTrLoc(){
  
}
function getGeLoc(){
  
}




// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}








window.initMap = initMap;
