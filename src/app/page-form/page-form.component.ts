import { Component } from '@angular/core';

import { ApiCatService, ApiLivreService } from '../api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

interface PageData {
  contenu: string;
  livre: number | null;
  chapter: number | null;
  pageNumber: number;
}

@Component({
  selector: 'app-page-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css', '../login/login.component.css'],
})
export class PageFormComponent {
  pageData: PageData = {
    contenu: '',
    livre: null,
    chapter: null,
    pageNumber: 1,
  };

  pageId = null;
  contenu = '';
  constructor(
    private apiLivreService: ApiLivreService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageData.livre = params['livreId'];
      this.pageData.chapter = params['chapterId'];
      this.pageId = params['pageId'];
    });
    if (this.pageId != null) {
      this.apiLivreService.getPage(this.pageId).subscribe((data: any) => {
        this.contenu = data.contenu;
      });
    }
  }
  addPages(): void {
    if (this.pageId != null) {
      console.log(this.pageData);
      this.apiLivreService
        .editPages(this.pageId, { contenu: this.pageData.contenu })
        .subscribe((data) => {
          this.openSnackBar('Modif réussie !');
          //this.router.navigate(['/meslivres']);
          this.router.navigate(['/home/show'], {
            queryParams: { livreId: this.pageData.livre },
          });
        });
    } else {
      console.log(this.pageData.livre, this.pageData.chapter);
      this.apiLivreService
        .addPages(this.pageData)
        .subscribe((response: any) => {
          this.openSnackBar('Ajout réussie !');
          //this.router.navigate(['/meslivres']);
          this.router.navigate(['/home/show'], {
            queryParams: { livreId: this.pageData.livre },
          });
        });
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }
}
