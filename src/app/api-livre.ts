import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiLivreService {
  apiUrl = 'http://34.163.165.4:3000';

  constructor(private http: HttpClient, private authService: AuthService) {}
  addLivre(livreData: any) {
    const token = this.authService.getToken();
    return this.http.post(`${this.apiUrl}/livres`, livreData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
