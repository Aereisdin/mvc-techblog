
    const newCommentHandler = async (event) => {
      event.preventDefault();
    
      const comment = document.querySelector('#comment').value.trim();
    
      if (comment) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log("Front JS has the info! passing it on!")
        if (response.ok) {
          document.location.replace('/post/{{id}}')
        } else {
          alert('Failed to create post');
        }
      }
    };
  
    document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);  
  