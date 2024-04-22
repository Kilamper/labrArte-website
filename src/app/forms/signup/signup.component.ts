import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user.interface";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit{
  registerForm!: FormGroup;
  userData!: User;
  backendErrorMessageRegister: string | null = null;

  constructor(private toastr:ToastrService, private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(18)]),
      confirmPassword: new FormControl('',[Validators.required,this.confirmPasswordValidator('password')])
    });
  }
  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  registerUser(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched()
      alert("Rellena todos los campos correctamente");
      return;
    } else {
      this.userData = this.registerForm.value
      this.userService.register(this.userData).then(() => {
        this.toastr.success('Usuario registrado con éxito', '¡Bienvenido a labrArte!');
        this.router.navigate(['/login'])
      }).catch((error) => {
        this.backendErrorMessageRegister = error.message;
      },);
    }
  }

  confirmPasswordValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmPasswordControl = control.root.get(controlName);
      if (confirmPasswordControl && confirmPasswordControl.value !== control.value) {
        return { confirmPasswordMismatch: true };
      }
      return null;
    };
  }
}
