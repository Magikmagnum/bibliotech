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
  livreId: string;
  chapterId: string;
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
    livreId: '',
    chapterId: '',
    pageNumber: 1,
  };

  constructor(
    private apiLivreService: ApiLivreService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageData.livreId = params['livreId'];
      this.pageData.chapterId = params['chapterId'];
    });
  }
  addPages(): void {
    this.apiLivreService.addPages(this.pageData).subscribe((response: any) => {
      this.openSnackBar('Ajout réussie !');
      //this.router.navigate(['/meslivres']);
      this.router.navigate(['/home/show'], {
        queryParams: { livreId: this.pageData.livreId },
      });
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }
}
