import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  @Output() closeSignup = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>(); // Event to open the login form

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      alert('Please fill all fields correctly!');
      return;
    }

    const signupData = this.signupForm.value;

    this.http
      .post('https://672b6ef31600dda5a9f4fed2.mockapi.io/users', signupData)
      .subscribe(
        (response) => {
          console.log('Signup successful:', response);
          alert('Signup successful!');
        },
        (error) => {
          console.error('Signup failed:', error);
          alert('Signup failed. Please try again.');
        }
      );
  }

  onClose() {
    this.closeSignup.emit(); // Emit event to close signup form
  }

  onLoginClick() {
    this.openLogin.emit(); // Emit event to open login form in sidebar
  }
}
