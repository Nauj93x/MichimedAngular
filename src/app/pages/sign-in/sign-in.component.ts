import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../model/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent {
  signInForm: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const user: User = this.signInForm.value;
      this.http.post('http://localhost:8090/sign-in', user).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/mascotas']);
          this.formSubmit.emit();
        },
        (error: HttpErrorResponse) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message || 'An error occurred during sign-in'
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
