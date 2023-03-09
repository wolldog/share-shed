let dailyrates;
let ownerID;
let userdata;
let markerData

const getMapData = async () => {
  
  console.log("hello")

  markerData = await fetch('/api/maps', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  console.log("goodbye")

};


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });

 

  
  for(var i = 0; i<ownerID;i++){
    for(var j = 0; j<userdata;j++){
      if (ownerID[i] === userdata.id[j]){
        addMarker(userdata.latlng, map, dailyrates[i])

      }
    }
    
  }
  
  
}


// Adds a marker to the map.
function addMarker(location, map, price) {
  

  //adds marker at location with price
console.log(location);
new google.maps.Marker({
  position: location,
  label: price,
  map: map,
});
}


document
.querySelector('#mapButton')
  .addEventListener('click', getMapData);




window.initMap = initMap;
