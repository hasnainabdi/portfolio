document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      
      if (data.success) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
      } else {
        alert('Error sending message');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Error sending message');
    }
  });