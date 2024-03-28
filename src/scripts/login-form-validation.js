document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email-login');
    const passwordInput = document.getElementById('password-login');

    // Function to validate individual input fields
    const validateEmail = () => {
        if (!emailInput.value) {
            emailInput.setCustomValidity('Rellena este campo');
            emailInput.classList.add('invalid');
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailInput.setCustomValidity('Por favor, introduce un email válido');
            emailInput.classList.add('invalid');
            return false;
        } else {
            emailInput.setCustomValidity('');
            emailInput.classList.remove('invalid');
            return true;
        }
    };

    const validatePassword = () => {
        if (!passwordInput.value) {
            passwordInput.setCustomValidity('Rellena este campo');
            passwordInput.classList.add('invalid');
            return false;
        } else if (passwordInput.value.length < 6 || passwordInput.value.length > 10) {
            passwordInput.setCustomValidity('Contraseña incorrecta');
            passwordInput.classList.add('invalid');
            return false;
        } else {
            passwordInput.setCustomValidity('');
            passwordInput.classList.remove('invalid');
            return true;
        }
    };

    // Function to validate the entire form
    const validateForm = () => {
        return validateEmail() & validatePassword();
    };

    // Validate form fields on form submission
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    // Validate form fields on input change
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
});