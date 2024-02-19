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

  addChapter(chapterData: any) {
    const token = this.authService.getToken();
    return this.http.post(`${this.apiUrl}/chapters`, chapterData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  addPages(pageData: any) {
    const token = this.authService.getToken();
    return this.http.post(`${this.apiUrl}/pages`, pageData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  editPages(id: number, pageData: any) {
    const token = this.authService.getToken();
    return this.http.put(`${this.apiUrl}/pages/${id}`, pageData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPage(id: number) {
    const token = this.authService.getToken();
    return this.http.get(`${this.apiUrl}/pages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getLivre(id: number) {
    const token = this.authService.getToken();
    return this.http.get(`${this.apiUrl}/livres/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getLivres() {
    const token = this.authService.getToken();
    return this.http.get(`${this.apiUrl}/livres`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteLivre(id: number) {
    const token = this.authService.getToken();
    return this.http.get(`${this.apiUrl}/livres/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  addImageLivre(imageLivreData: any) {
    const token = this.authService.getToken();
    console.log('test addLivre', imageLivreData);
    return this.http.post(`${this.apiUrl}/upload`, imageLivreData, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: `multipart/form-data`,
      },
    });
  }

  getLivresList() {
    const token = this.authService.getToken();
    return this.http.get(`${this.apiUrl}/livres/byUser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
