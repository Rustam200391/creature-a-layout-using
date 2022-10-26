const likesCounter = (id, body, counter) => {
    fetch(`http://localhost:3000/article/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => (counter.textContent = data.likes))
      .catch((error) => console.error(error));
  };
  
  export default likesCounter ;
  
  