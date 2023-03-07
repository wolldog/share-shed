const bookBtn = document.getElementById('book-btn');

// BookBtnHandler function

const bookBtnHandler = async (event) => {
    event.preventDefault();
    console.log('bookBtnHandler has been clicked! Yay!')
    
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const productID = document.location.pathname.split('/').pop();
    const dailyRateString = document.getElementById('daily-rate').innerHTML.split(':').pop();
    const dailyRate = parseFloat(dailyRateString);
    console.log(startDate, endDate, productID, dailyRate);
    console.log(typeof dailyRate)
    
    const response = await fetch(`/api/booking/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ startDate, endDate, dailyRate, productID }),
    });
    
    if (response.ok) {
        alert('Booking successfully created!');
      } else {
        alert(response.statusText);
      }
    console.log(response);
};

// Add event listener to 'Book now' button

bookBtn.addEventListener('click', bookBtnHandler);