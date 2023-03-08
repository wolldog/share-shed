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


// Adds a marker to the map.
function addMarker(geocodedinfo, map, price) {
  

  //adds marker at location with price

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
