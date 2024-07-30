document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Perform basic validation
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMsg = document.getElementById('error-msg');
    
    if (username === '' || password === '') {
      errorMsg.textContent = 'Please enter both username and password.';
      return;
    }
    
    // Simulate a simple login process (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      // Redirect to the HR management dashboard or another page
      alert('Registered successfully!');
      window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } 
  });
  