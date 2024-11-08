import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  @Output() openSignup = new EventEmitter<void>(); // Event to open the signup form

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method for login submission
  onLoginClick() {
    if (this.loginForm.invalid) {
      alert('Please fill in valid credentials');
      return;
    }

    const loginData = this.loginForm.value;

    this.http
      .get<any[]>('https://672b6ef31600dda5a9f4fed2.mockapi.io/users')
      .subscribe(
        (users) => {
          const user = users.find(
            (u) =>
              u.email === loginData.email && u.password === loginData.password
          );

          if (user) {
            alert('Login successful');
            this.router.navigate(['/main']);
          } else {
            alert('Invalid credentials');
          }
        },
        (error) => {
          console.error('Error during login:', error);
          alert('An error occurred while trying to log in.');
        }
      );
  }

  // Method to toggle to the signup form
  toggleSignup() {
    this.openSignup.emit();
  }
}
