// scripts.js

// Function to validate the form
const validateForm = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value; // Get username
    const password = document.getElementById('password').value; // Get password

    // Basic validation
    if (username === '' || password === '') {
        alert('Please fill in all fields'); // Alert if fields are empty
    } else if (password.length < 6) {
        alert('Password must be at least 6 characters long'); // Alert if password is too short
    } else {
        alert('Login successful!'); // Alert for successful login
        // Here, you can add code to handle the login process, e.g., redirecting the user
        // window.location.href = 'homepage.html'; // Uncomment this line to redirect
    }
};

// Event listener for form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateForm);
