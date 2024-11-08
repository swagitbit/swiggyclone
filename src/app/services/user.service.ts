import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://672b6ef31600dda5a9f4fed2.mockapi.io/users';

  constructor(private http: HttpClient) {}

  // Add this method if it's not in the code
  signup(userData: {
    phoneNumber: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  login(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`);
  }
}
