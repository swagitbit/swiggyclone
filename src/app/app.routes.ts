// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FoodOptionComponent } from './component/food-option/food-option.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Root path shows Dashboard
  { path: 'food/:foodType', component: FoodOptionComponent }, // Displays FoodOptionComponent for each food type
  { path: '**', redirectTo: '' }, // Redirects unknown paths to Dashboard
];
