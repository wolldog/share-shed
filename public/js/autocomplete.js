

// function definition
async function geocode(name) {
    const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=AIzaSyBIEMx6WQ4zS-cnm7CBhC41xLHISUwukVE`)
    const data = await resp.json();
    console.log(data.results[0].geometry.location);
    return data.results[0].geometry.location;
  }

function initAutocomplete(){

  var address = document.querySelector("#address-signup");
  autocomplete = new google.maps.places.Autocomplete(address, {
    componentRestrictions: { country: ["aus"] },
    fields: ["address_components", "geometry"],
    types: ["address"],
  });
    place = autocomplete.getPlace();
    
  
  
  
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  

}
window.initAutocomplete = initAutocomplete;
