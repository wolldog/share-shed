var booton = document.getElementById("mapButton");

booton.addEventListener("click", async () => {
    const response = await fetch('/api/maps', {
        method: 'GET',
      });
    if(response.ok){
        //console.log(response);
    }

});