import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FoodOptionComponent } from './component/food-option/food-option.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterOutlet,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    FoodOptionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'swiggyclone';
  showSignup = false;
  showLogin = false;

  // Opens the signup form initially
  openSignup() {
    this.showSignup = true;
    this.showLogin = false;
  }

  // Toggles to the login form
  toggleLogin() {
    this.showSignup = false;
    this.showLogin = true;
  }

  // Resets both forms when closing sidebar
  closeSidebar() {
    this.showSignup = false;
    this.showLogin = false;
  }
}
