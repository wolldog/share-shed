const listingFormHandler = async (event) => {
    event.preventDefault();

    const product_name = document.querySelector('#listing-name').value.trim();
    const category = document.querySelector('#listing-category').value.trim();
    const make = document.querySelector('#product-make').value.trim();
    const model = document.querySelector('#product-model').value.trim();
    const rate = document.querySelector('#daily-rate').value.trim();
    const manual = document.querySelector('#user-manual').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    
    if (product_name && category && make && rate) {
      const response = await fetch('/api/listing', {
        method: 'POST',
        body: JSON.stringify({ product_name, category, make, model, rate, manual, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('New listing successfully created');
        document.location.replace('/');
      } else {
        alert('Ooops');
      }
    }
  };
  
  document
    .querySelector('.listing-form')
    .addEventListener('submit', listingFormHandler);