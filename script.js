 // Optional: simple client-side validation
 document.getElementById('contact-form').addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  if (!name || !email.includes('@')) {
    alert('Please provide a valid name and email.');
    e.preventDefault();
  }
});

// Handle form submission with Fetch API
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    const messageBox = document.getElementById('form-response');
    if (response.ok) {
      messageBox.textContent = "Thank you! Your message has been sent.";
      messageBox.style.color = "green";
      form.reset();
    } else {
      messageBox.textContent = "Oops! Something went wrong.";
      messageBox.style.color = "red";
    }
  });
});
