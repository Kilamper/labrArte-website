import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService ) {}
  loginForm!: FormGroup;
  backendErrorMessageRegister: any;
  userData!: any;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(18)])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  loginUser() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched()
      alert('Por favor, rellena los campos correctamente');
    }else {
      this.userData = this.loginForm.value
      this.userService.login(this.userData).then(() => {
        this.toastr.success('¡Bienvenido a labrArte!', 'Inicio de sesión exitoso');
        this.router.navigate(['/profile'])
      }, (error) => {
        this.backendErrorMessageRegister = error.message;
      },);
    }
  }
}
