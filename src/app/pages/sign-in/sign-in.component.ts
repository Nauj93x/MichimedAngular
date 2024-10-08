import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  @Output() formSubmit = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const user: User = this.signInForm.value;
      this.http.post('http://localhost:8090/sign-in', user).subscribe(response => {
        this.router.navigate(['/mascotas']);
      });
      this.formSubmit.emit();
    }
  }
}
