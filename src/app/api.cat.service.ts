import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCatService {
  isLoggedIn = false;
  private readonly TOKEN_KEY = 'jwt_token';
  apiUrl = 'http://34.163.165.4:3000';

  constructor(private http: HttpClient, private authService: AuthService) {}
  getCategories() {
    const token = this.authService.getToken();
    return this.http.get(`${this.apiUrl}/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
