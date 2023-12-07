const newBlogCommentFormHandler = async (event) => {
    event.preventDefault();

    const anime_id = parseInt(window.location.pathname.split('/').pop());

    const content = document.querySelector('#content-new-blog-comment').value.trim();

    if (content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_text: content, anime_id }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        console.log('Response status:', response.status);
        console.log('Response text:', await response.text());
        alert('Failed to create a comment.');
      }
    }
  };



document.querySelector('.new-blog-comment-form').addEventListener('submit', newBlogCommentFormHandler);