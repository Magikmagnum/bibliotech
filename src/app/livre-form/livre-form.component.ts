import { ApiCatService, ApiLivreService } from '../api.service';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  imageForm: FormGroup;
  selectedFile: File | null = null;


  livreCategories: any[] = [];

  selectedCategories: number[] = [];

  constructor(private apiCatService: ApiCatService, private apiLivreService: ApiLivreService, private fb: FormBuilder) {
    this.imageForm = this.fb.group({
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  addLivre() {

    this.apiLivreService.addImageLivre({file: this.selectedFile}).subscribe(data => {
      console.log(data);
    });

    // this.livreData.categories = this.selectedCategories;

    // if(this.selectedFile) {
    //   const formData = new FormData();
    //   formData.append('image', this.selectedFile, this.selectedFile.name);
    //   this.livreData.image = formData;
    // }

    // this.apiLivreService.addLivre(this.livreData).subscribe(
    //   (response: any) => {
    //     console.log('Réponse de addLivre:', response);
    //   },
    //   (error) => {
    //     console.error('Une erreur s\'est produite lors de l\'ajout du livre :', error);
    //   }
    // );
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
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

}

