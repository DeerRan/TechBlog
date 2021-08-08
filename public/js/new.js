const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="posttitle"]').value;
  const body = document.querySelector('textarea[name="postbody"]').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document.querySelector('#newform').addEventListener('submit', newFormHandler);
