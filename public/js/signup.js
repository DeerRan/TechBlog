const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#userlogin');
    const password = document.querySelector('#passwordlogin');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Couldn't sign up");
    }
};

document
  .querySelector('#signupform')
  .addEventListener('submit', signupFormHandler);