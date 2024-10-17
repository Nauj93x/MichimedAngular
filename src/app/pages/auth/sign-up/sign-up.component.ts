import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
    // Inicializa el formulario con validaciones
    this.signUpForm = this.fb.group({
      // Campos de email y contraseñas con validaciones
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required]], 
    });
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.http.post('http://localhost:8090/sign-up', user).subscribe(
        response => {
          // Navega a la página de inicio de sesión si la solicitud es exitosa
          this.router.navigate(['/sign-in']);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Sign up successful. Please sign in.'
          });
        },
        (error: HttpErrorResponse) => {
          // Muestra un mensaje de error en caso de fallo
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message || 'An error occurred during sign-up'
          });
        }
      );
    } else {
      // Mensaje de advertencia si el formulario es invalido
      this.messageService.add({
        severity: 'warn',
        summary: 'Invalid Form',
        detail: 'Please fill in all required fields correctly'
      });
    }
  }
}
