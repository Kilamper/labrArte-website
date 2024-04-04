import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  nameInput!: HTMLInputElement;
  emailInput!: HTMLInputElement;
  passwordInput!: HTMLInputElement;
  confirmPasswordInput!: HTMLInputElement;

  ngOnInit(): void {
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.emailInput = document.getElementById('email') as HTMLInputElement;
    this.passwordInput = document.getElementById('password') as HTMLInputElement;
    this.confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;

    this.nameInput.addEventListener('input', this.validateName.bind(this));
    this.emailInput.addEventListener('input', this.validateEmail.bind(this));
    this.passwordInput.addEventListener('input', this.validatePassword.bind(this));
    this.confirmPasswordInput.addEventListener('input', this.validateConfirmPassword.bind(this));
  }

  validateName() {
    if (!this.nameInput.value) {
      this.nameInput.setCustomValidity('Rellena este campo');
      this.nameInput.classList.add('invalid');
      return false;
    } else if (!/^[a-zA-Z\s]+$/.test(this.nameInput.value)) {
      this.nameInput.setCustomValidity('Nombre no válido, solo puede contener letras y espacios');
      this.nameInput.classList.add('invalid');
      return false;
    } else {
      this.nameInput.setCustomValidity('');
      this.nameInput.classList.remove('invalid');
      return true;
    }
  }

  validateEmail() {
    if (!this.emailInput.value) {
      this.emailInput.setCustomValidity('Rellena este campo');
      this.emailInput.classList.add('invalid');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.emailInput.value)) {
      this.emailInput.setCustomValidity('Por favor, introduce un email válido');
      this.emailInput.classList.add('invalid');
      return false;
    } else {
      this.emailInput.setCustomValidity('');
      this.emailInput.classList.remove('invalid');
      return true;
    }
  }

  validatePassword() {
    if (!this.passwordInput.value) {
      this.passwordInput.setCustomValidity('Rellena este campo');
      this.passwordInput.classList.add('invalid');
      return false;
    } else if (this.passwordInput.value.length < 6 || this.passwordInput.value.length > 10) {
      this.passwordInput.setCustomValidity('La contraseña debe tener entre 6 y 10 caracteres');
      this.passwordInput.classList.add('invalid');
      return false;
    } else {
      this.passwordInput.setCustomValidity('');
      this.passwordInput.classList.remove('invalid');
      return true;
    }
  }

  validateConfirmPassword() {
    if (!this.confirmPasswordInput.value) {
      this.confirmPasswordInput.setCustomValidity('Rellena este campo');
      this.confirmPasswordInput.classList.add('invalid');
      return false;
    } else if (this.passwordInput.value !== this.confirmPasswordInput.value) {
      this.confirmPasswordInput.setCustomValidity('Las contraseñas no coinciden');
      this.confirmPasswordInput.classList.add('invalid');
      return false;
    } else {
      this.confirmPasswordInput.setCustomValidity('');
      this.confirmPasswordInput.classList.remove('invalid');
      return true;
    }
  }

  validateForm() {
    return (
      this.validateName() &&
      this.validateEmail() &&
      this.validatePassword() &&
      this.validateConfirmPassword()
    );
  }

  onSubmit(event: Event) {
    if (!this.validateForm()) {
      event.preventDefault();
    } else {
      alert('Registro completado con éxito');
    }
  }
}
