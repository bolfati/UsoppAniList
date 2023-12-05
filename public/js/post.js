const comment = async (event) => {
  event.preventDefault();
  const newComment = document.querySelector('#new-comment').value.trim();
  if (newComment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to post comment.');
    }
  }
};

document.querySelector('#comment').addEventListener('click', comment);
