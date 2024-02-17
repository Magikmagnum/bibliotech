import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

const API_URL = 'http://34.163.165.4:3000';

@Injectable({
  providedIn: 'root',
})
export class ApiCatService {
  apiUrl = API_URL;

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


@Injectable({
  providedIn: 'root',
})
export class ApiLivreService {
  apiUrl = API_URL;

  constructor(private http: HttpClient, private authService: AuthService) {}
  
  addLivre(livreData: any) {
    const token = this.authService.getToken();
    return this.http.post(`${this.apiUrl}/livres`, livreData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addImageLivre(imageLivreData: any) {
    console.log('test addLivre', imageLivreData);
    return this.http.post(`${this.apiUrl}/upload`, imageLivreData);
  }
}



