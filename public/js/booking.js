const bookBtn = document.getElementById('book-btn');
const startDate = document.getElementById('start_date').value;
const endDate = document.getElementById('end_date').value;
const productID = document.location.search.split('/').pop();
console.log(productID);
const dailyRate = document.getElementById('daily-rate').value;

// Add event listener to 'Book now' button

bookBtn.addEventListener('click', bookBtnHandler);

// BookBtnHandler function

const bookBtnHandler = async (event) => {
    const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ productID, startDate, endDate, dailyRate }),
    });
    
    if (response.ok) {
        alert('Booking successfully created!');
      } else {
        alert(response.statusText);
      }
};

