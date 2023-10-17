import { AuthService } from './../../../infraestructure/driven-adapter/auth-api/auth.service';
import { UserService } from './../../../infraestructure/driven-adapter/user-api/user.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isActive: boolean = true; // Por defecto, muestra el formulario de login

  registerForm!: FormGroup;
  loginForm!: FormGroup;

  private fb = inject(FormBuilder)
  private UserService = inject(UserService);
  private AuthService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submitRegisterForm() {
    if (this.registerForm.valid) {
      const newUser = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
      }

      this.AuthService.register(newUser)
        ?.subscribe({
          next: (val: any) => {

            this.router.navigateByUrl('/admin')

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `User: ${newUser.name} created successfully`,
              timer: 2000,
              showConfirmButton: false,
            })
            
          },
          error: (err: any) => {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: err.error.message,
              showConfirmButton: false,
              timer: 2000
            })
          }
        })
    }
  }

  toggleForm(formType: string): void {
    this.isActive = formType === 'login';
  }
}
