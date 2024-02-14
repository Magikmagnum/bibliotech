import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://34.163.165.4:3000/users';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(this.apiUrl, userData);
  }
}
