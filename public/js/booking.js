const bookBtn = document.getElementById('book-btn');
const datePickers = document.querySelectorAll('.js-calculate-total');
console.log(datePickers)
const dailyRateString = document.getElementById('daily-rate').innerHTML.split(':').pop();
const dailyRate = parseFloat(dailyRateString);

// BookBtnHandler function

const bookBtnHandler = async (event) => {
    event.preventDefault();
    console.log('bookBtnHandler has been clicked! Yay!')
    
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const productID = document.location.pathname.split('/').pop();
    // const dailyRateString = document.getElementById('daily-rate').innerHTML.split(':').pop();
    // const dailyRate = parseFloat(dailyRateString);
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

// CalculateTotal function

const calculateTotal = (event) => {
  const startDate = document.getElementById('start_date').value;
  const endDate = document.getElementById('end_date').value;
  // const isStartDate = event.target.id === 'start_date';
  console.log(event.target.value)
  const date1 = dayjs(endDate);
  const dayCount = date1.diff(startDate, 'day');
  console.log(dayCount)
  console.log(typeof dayCount)
  const paymentTotal = dayCount * dailyRate;
  bookBtn.innerHTML = `Book now for $${paymentTotal}`;
};

// Add event listener to 'Book now' button

bookBtn.addEventListener('click', bookBtnHandler);

// Add event listener to date pickers

datePickers.forEach((datePicker) => {
    datePicker.addEventListener('change', calculateTotal);
});