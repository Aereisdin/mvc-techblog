
    const newCommentHandler = async (event) => {
      // event.preventDefault();
    
      const comment = document.querySelector('#comment').value.trim();
      const path = window.location.pathname.split('/');
      const post_id = path[2];

      if (comment) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ comment, post_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          console.log(JSON.stringify({ comment, post_id }))
        } else {
          alert('Failed to create post');
        }
      }
    };
  
    document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);  
  