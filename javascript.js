document.addEventListener('DOMContentLoaded', function() {
    // Get the login button and form
    const loginButton = document.getElementById('btn_click');
    const loginForm = document.querySelector('.form');

    // Add click event listener to the login button
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get the username and password inputs
        const usernameInput = document.querySelector('input[name="uname"]');
        const passwordInput = document.querySelector('input[name="password"]');

        // Get the values
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Perform validation
        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }
        const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validate username
        if (!usernameRegex.test(username)) {
            alert('Username must be 4-20 characters long and can only contain letters, numbers, and underscores.');
            return;
        }

        // Validate password
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&).');
            return;
        }

        // If we get here, both username and password are valid
        alert('Login credentials are valid. Proceeding with login...');
        console.log("User Name : " + username);
        console.log("Password : " + password);
        // Here you would typically send these credentials to a server for verification
        // For this example, we'll use a simple check
    });
});