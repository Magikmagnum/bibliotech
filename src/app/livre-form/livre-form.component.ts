import { ApiCatService, ApiLivreService } from '../api.service';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface LivreData {
  title: string;
  resume: string;
  image: FormData | null;
  categories: number[];
}

@Component({
  selector: 'app-livre-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './livre-form.component.html',
  styleUrl: './livre-form.component.css',
})
export class LivreFormComponent {
  livreData: LivreData = {
    title: '',
    resume: '',
    image: null,
    categories: [],
  };

  imageForm: FormGroup;
  selectedFile: File | null = null;

  livreCategories: any[] = [];

  selectedCategories: number[] = [];

  constructor(
    private apiCatService: ApiCatService,
    private apiLivreService: ApiLivreService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  async addLivre() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    await this.apiLivreService
      .addImageLivre(formData)
      .subscribe((data: any) => {
        console.log(data);
        this.livreData.image = data.imgUrl;
      });

    this.livreData.categories = this.selectedCategories;

    this.apiLivreService.addLivre(this.livreData).subscribe(
      (response: any) => {
        console.log('Réponse de addLivre:', response);
        this.openSnackBar('Ajout réussie !');
        this.router.navigate(['/meslivres']);
      },
      (error) => {
        this.openSnackBar('Ajout échoué !');
        console.error(
          "Une erreur s'est produite lors de l'ajout du livre :",
          error
        );
      }
    );
  }

  getCategories() {
    this.apiCatService.getCategories().subscribe(
      (response: any) => {
        this.livreCategories = response; // Stockez les catégories dans this.livreCategories
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des catégories :",
          error
        );
      }
    );
  }

  // Méthode pour gérer la sélection de fichier
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }
}
