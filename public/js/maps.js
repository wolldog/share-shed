
var seedlist = [
    {
        price: "$50",
        lat: -33.900282,
        lng: 151.139214
    },
    {
        price: "$75",
        lat: -33.8688,
        lng: 151.2093
    },
    {
        price: "$25",
        lat: -33.880474,
        lng: 151.178207
    }
]

function initMap() {
  const sydney = { lat: -33.8688, lng: 151.2093 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: sydney,
  });
  
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

