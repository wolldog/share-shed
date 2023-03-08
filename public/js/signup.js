
const signupFormHandler = async (event) => {
    event.preventDefault();
  
  
    const first_name = document.querySelector('#first-name-signup').value.trim();
    const last_name = document.querySelector('#last-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    

  
  
  
    if (first_name && last_name && email && address && password ) {
      // geocoding usage
      const latlong = await geocode(address);
      
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, email, address, latlong , password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  