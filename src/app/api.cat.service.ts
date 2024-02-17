import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCatService {
  isLoggedIn = false;
  private readonly TOKEN_KEY = 'jwt_token';
  apiUrl = 'http://34.163.165.4:3000';

  constructor(private http: HttpClient) {}
  getCategories() {
    return this.http.get(`${this.apiUrl}/categories`);
  }
}
