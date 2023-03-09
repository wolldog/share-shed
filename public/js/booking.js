const bookBtn = document.getElementById('book-btn');
const datePickers = document.querySelectorAll('.js-calculate-total');
console.log(datePickers)
const dailyRateString = document.getElementById('daily-rate').innerHTML.split(':').pop();
const dailyRate = parseFloat(dailyRateString);

// BookBtnHandler function

const bookBtnHandler = async (event) => {
    event.preventDefault();
    console.log('bookBtnHandler has been clicked!')
    
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const productID = document.location.pathname.split('/').pop();
    
    const date1 = dayjs(endDate);
    const dayCount = date1.diff(startDate, 'day');
    const paymentTotal = dayCount * dailyRate;
    console.log(paymentTotal)
    const paymentTotalDec = parseFloat(paymentTotal.toFixed(2)) + 0.01;
    console.log(paymentTotalDec)
    console.log(typeof paymentTotalDec)
    
    const postBooking = await fetch(`/api/booking/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ startDate, endDate, paymentTotalDec, productID }),
    });
    
    console.log(postBooking);

    const getBooking = await fetch('/api/booking', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (postBooking.ok && getBooking.ok) {
      document.location.replace('/');
    } else {
      alert(getBooking.statusText);
    }
};

// Booking confirmation fetch

// async function bookingConfirm() {
//   const response = await fetch('/api/booking', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });
//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// }; 

// CalculateTotal function

const calculateTotal = async (event) => {
  const startDate = document.getElementById('start_date').value;
  const endDate = document.getElementById('end_date').value;
  // const isStartDate = event.target.id === 'start_date';
  console.log(event.target.value)
  const date1 = dayjs(endDate);
  const dayCount = date1.diff(startDate, 'day');
  console.log(dayCount)
  console.log(typeof dayCount)
  const paymentTotal = await dayCount * dailyRate;
  bookBtn.innerHTML = `Book now for $${paymentTotal}`;
  return paymentTotal;
};

// Add event listener to 'Book now' button

bookBtn.addEventListener('click', bookBtnHandler);

// Add event listener to date pickers

datePickers.forEach((datePicker) => {
    datePicker.addEventListener('change', calculateTotal);
});