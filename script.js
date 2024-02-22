document.addEventListener('Loading content', function() {
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
  
    if (signInForm) {
      signInForm.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
  
        if (!username || !password) {
          alert('Username and password are required');
          event.preventDefault();
        }
      });
    }
  
    if (signUpForm) {
      signUpForm.addEventListener('submit', function(event) {
        const fullName = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const age = document.getElementById('age').value.trim();
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
        if (!fullName || !email || !password || !age) {
          alert('All fields are required');
          event.preventDefault();
        } else if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          event.preventDefault();
        } else if (!passwordRegex.test(password)) {
          alert('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
          event.preventDefault();
        } else if (isNaN(age) || age < 18 || age > 100) {
          alert('Please enter a valid age between 18 and 100');
          event.preventDefault();
        }
      });
    }
  });
  