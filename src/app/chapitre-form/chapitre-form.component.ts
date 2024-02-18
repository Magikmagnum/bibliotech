import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ApiLivreService } from '../api.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

interface chapterData {
  title: string;
  livreId: number[];
}
@Component({
  selector: 'app-chapitre-form',
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
  templateUrl: './chapitre-form.component.html',
  styleUrls: ['./chapitre-form.component.css', '../login/login.component.css'],
})
export class ChapitreFormComponent {
  chapterData: chapterData = {
    title: '',
    livreId: [],
  };

  constructor(
    private apiLivreService: ApiLivreService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLivresList();
  }

  livreList: any[] = [];

  selectedLivres: number[] = [];

  addChapter() {
    this.chapterData.livreId = this.selectedLivres;
    this.apiLivreService
      .addChapter(this.chapterData)
      .subscribe((response: any) => {
        this.openSnackBar('Ajout réussie !');
        //this.router.navigate(['/meslivres']);
        this.router.navigate(['/addpage']);
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }

  getLivresList() {
    this.apiLivreService.getLivresList().subscribe(
      (response: any) => {
        this.livreList = response; // Stockez les catégories dans this.livreCategories
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories :",
          error
        );
      }
    );
  }
}
