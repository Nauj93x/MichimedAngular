import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent {
  signInForm: FormGroup; // Formulario de inicio de sesión
  @Output() formSubmit = new EventEmitter<void>(); // Evento emitido al enviar formulario

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
    this.signInForm = this.fb.group({
      // Inicializa el formulario con validaciones
      cedula: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const user: User = this.signInForm.value;
      this.http.post<{id:number,  admin: boolean }>('http://localhost:8090/sign-in', user).subscribe(
        response => {
          localStorage.clear();
          if(response.admin){
            localStorage.setItem('admin', 'true');
            localStorage.setItem('idAdmin', response.id.toString());
            this.router.navigate(['/admin/dashboard']); // Navega al dashboard de administrador
          }else{
            localStorage.setItem('admin', 'false');
            localStorage.setItem('idVeterinario', response.id.toString());
            this.router.navigate(['/mascotas']); // Navega a la pág de mascotas
          }
          this.formSubmit.emit();
        },
        (error: HttpErrorResponse) => {
          // Muestra un mensaje de error en caso de fallo
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message || 'Ha ocurrido un error durante el inicio de sesión'
          });
        }
      );
    } else {
      Object.keys(this.signInForm.controls).forEach(key => {
        const control = this.signInForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
