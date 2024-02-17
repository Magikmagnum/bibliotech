import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  private readonly TOKEN_KEY = 'jwt_token';
  apiUrl = 'http://34.163.165.4:3000';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, userData);
  }

  logout() {
    return this.clearToken();
  }

  // Stocker le token dans le localStorage
  storeToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  // Récupérer le token depuis le localStorage
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  // Supprimer le token du localStorage
  clearToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
  isAuthenticated(): boolean {
    const token = this.getToken();
    // L'utilisateur est authentifié si le token existe
    return token !== null && token !== '';
  }
}
