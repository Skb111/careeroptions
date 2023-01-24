const form = document.getElementById('form');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;

  fetch('https://api.enzoic.com/exposures', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${c04b2e077e1f4bea9957df9c9f55f625}` 
    }
  })
  .then((response) => {
    if (response.status === 200) {
      const messageDiv = document.getElementById('message');
      messageDiv.innerHTML = 'Email submitted successfully!';
    }
  });
});


