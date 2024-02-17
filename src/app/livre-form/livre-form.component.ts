import { ApiCatService } from './../api.cat.service';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


interface LivreData {
  title: string;
  resume: string;
  image: File| null;
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
    ReactiveFormsModule
  ],
  templateUrl: './livre-form.component.html',
  styleUrl: './livre-form.component.css'
})
export class LivreFormComponent {

  livreData: LivreData = {
    title: '',
    resume: '',
    image: null,
    categories: [],
  };

  livreCategories: any[] = [];

  selectedCategories: number[] = [];

  constructor(private apiCatService: ApiCatService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  addLivre() {
    this.livreData.categories = this.selectedCategories


    console.log('test addLivre',  this.livreData); // Vérifiez la réponse dans la console
  }

  getCategories() {
    this.apiCatService.getCategories().subscribe(
      (response: any) => {
        this.livreCategories = response; // Stockez les catégories dans this.livreCategories
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
      }
    );
  }

  // Méthode pour gérer la sélection de fichier
  onFileSelected(event: any): void {
    this.livreData.image = event.target.files[0];
  }

}

