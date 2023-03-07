const router = require("express").Router();
const { User, Product, Category } = require("../models");


// GET location data for maps

function getLocData(){
  router.get("/", async (req, res) => {
    try {
      const dbLocationData = await User.findAll();

      const locations = dbLocationData.map((address) =>
        address.get({ plain: true })
      );
      console.log(locations);
    
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  return locations
}
console.log(getLocData());
 /* get user location from db */


function initMap() {
    const sydney = { lat: -33.8688, lng: 151.2093 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: sydney,
    });

    seeds = getLocData();
    
    for(var i =0; i<seedlist.length;i++){
      addMarker(seedlist[i], map);
    }
  
  
  }
  
  // Adds a marker to the map.
  function addMarker(locationinfo, map) {
    
  
      //adds marker at location with price
    var price = locationinfo.price;
    var lat = locationinfo.lat;
    var lng = locationinfo.lng;
    var location = {lat, lng};
    console.log(location);
    new google.maps.Marker({
      position: location,
      label: price,
      map: map,
    });
  }
  
  window.initMap = initMap;