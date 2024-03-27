document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Function to validate form fields
    const validateForm = () => {
        let validationFailed = false;

        // Reset styles
        [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
            input.style.border = '';
        });

        // Check if all fields are filled
        if (!nameInput.value || !emailInput.value || !passwordInput.value || !confirmPasswordInput.value) {
            nameInput.setCustomValidity('All fields are required');
            nameInput.style.border = '2px solid red';
            validationFailed = true;
        } else {
            nameInput.setCustomValidity('');
        }

        // Check if name contains only alphabetic characters
        if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
            nameInput.setCustomValidity('Name should contain only alphabetic characters');
            nameInput.style.border = '2px solid red';
            validationFailed = true;
        } else {
            nameInput.setCustomValidity('');
        }

        // Check if email is valid
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address');
            emailInput.style.border = '2px solid red';
            validationFailed = true;
        } else {
            emailInput.setCustomValidity('');
        }

        // Check if password and confirm password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('Passwords do not match');
            confirmPasswordInput.style.border = '2px solid red';
            validationFailed = true;
        } else {
            confirmPasswordInput.setCustomValidity('');
        }

        // Check if password length is between 6 and 10
        if (passwordInput.value.length < 6 || passwordInput.value.length > 10) {
            passwordInput.setCustomValidity('Password should be between 6 and 10 characters');
            passwordInput.style.border = '2px solid red';
            validationFailed = true;
        } else {
            passwordInput.setCustomValidity('');
        }

        return validationFailed;
    };

    // Validate form fields on form submission
    form.addEventListener('submit', function(event) {
        if (validateForm()) {
            event.preventDefault();
        }
    });

    // Validate form fields on input change
    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.addEventListener('input', validateForm);
    });
});