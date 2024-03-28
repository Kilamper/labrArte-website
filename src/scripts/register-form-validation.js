document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Function to validate individual input fields
    const validateName = () => {
        if (!nameInput.value) {
            nameInput.setCustomValidity('Rellena este campo');
            nameInput.classList.add('invalid');
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
            nameInput.setCustomValidity('Nombre no válido, solo puede contener letras y espacios');
            nameInput.classList.add('invalid');
            return false;
        } else {
            nameInput.setCustomValidity('');
            nameInput.classList.remove('invalid');
            return true;
        }
    };

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
            passwordInput.setCustomValidity('La contraseña debe tener entre 6 y 10 caracteres');
            passwordInput.classList.add('invalid');
            return false;
        } else {
            passwordInput.setCustomValidity('');
            passwordInput.classList.remove('invalid');
            return true;
        }
    };

    const validateConfirmPassword = () => {
        if (!confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('Rellena este campo');
            confirmPasswordInput.classList.add('invalid');
            return false;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('Las contraseñas no coinciden');
            confirmPasswordInput.classList.add('invalid');
            return false;
        } else {
            confirmPasswordInput.setCustomValidity('');
            confirmPasswordInput.classList.remove('invalid');
            return true;
        }
    };

    // Function to validate the entire form
    const validateForm = () => {
        return validateName() & validateEmail() & validatePassword() & validateConfirmPassword();
    };

    // Validate form fields on form submission
    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        } else {
            alert('Registro completado con éxito');
        }
    });

    // Validate form fields on input change
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
});
