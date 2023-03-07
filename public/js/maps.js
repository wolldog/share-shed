var booton = document.getElementById("mapButton");

booton.addEventListener("click", async () => {
    const response = await fetch('/maps', {
        method: 'GET',
      });
    if(response.ok){
        console.log(response);
    }

});