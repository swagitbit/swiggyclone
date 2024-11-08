// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FoodOptionComponent } from './component/food-option/food-option.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'food/:foodType', component: FoodOptionComponent }, // Route with parameter
  { path: '**', redirectTo: '' }, // Redirect any unknown route to dashboard
];
