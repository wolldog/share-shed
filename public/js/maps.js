let dailyrates;
let ownerID;
let userdata;

const getMarkerInfo = async () => {
  console.log("hello")
  dailyrates = await fetch('/product/:daily_rate', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  ownerID = await fetch('/product/:owner_id',{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  userdata = await fetch('/api/users/user',{
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  
  return [dailyrates, ownerID, userdata]
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

  getMarkerInfo();

  

  
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







window.initMap = initMap;
