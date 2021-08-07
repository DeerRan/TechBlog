const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('userlogin');
    const password = document.getElementById('passwordlogin');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Couldn't sign up");
    }
};
  
document.getElementById('signupbtn')

document.addEventListener('submit', signupFormHandler);
  