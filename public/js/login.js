const loginFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#usernamelogin');
  const password = document.querySelector('#passwordlogin');

  const response = await fetch('/api/user/login', {
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
    alert("Couldn't login");
  }
};

document
  .querySelector('#loginform')
  .addEventListener('submit', loginFormHandler);
