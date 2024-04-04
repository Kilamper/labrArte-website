import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{

  constructor() {}
  emailInput!: HTMLInputElement;
  passwordInput!: HTMLInputElement;

  ngOnInit(): void {
    this.emailInput = document.getElementById('email-login') as HTMLInputElement;
    this.passwordInput = document.getElementById('password-login') as HTMLInputElement;

    this.emailInput.addEventListener('input', this.validateEmail.bind(this));
    this.passwordInput.addEventListener('input', this.validatePassword.bind(this));
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
      this.passwordInput.setCustomValidity('Contraseña incorrecta');
      this.passwordInput.classList.add('invalid');
      return false;
    } else {
      this.passwordInput.setCustomValidity('');
      this.passwordInput.classList.remove('invalid');
      return true;
    }
  }

  validateForm() {
    return this.validateEmail() && this.validatePassword();
  }

  onSubmit(event: Event) {
    if (!this.validateForm()) {
      event.preventDefault();
    }
  }
}
