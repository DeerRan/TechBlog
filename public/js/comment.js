const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="postid"]').value;
  const body = document.querySelector('textarea[name="commentbody"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document.querySelector('#commentform').addEventListener('submit', commentFormHandler);
