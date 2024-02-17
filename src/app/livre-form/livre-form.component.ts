import { ApiCatService } from './../api.cat.service';
import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';



import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

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

  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    ca: 'user', // Valeur par défaut du rôle
  };

  livreCategories = {};

  selectedCategories: string[] = [];

  constructor(private apiCatService: ApiCatService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  addLivre() {

  }

  getCategories() {
    this.apiCatService.getCategories().subscribe(
      (response: any) => {
        console.log('test ngOnInit', response); // Vérifiez la réponse dans la console
        this.livreCategories = response; // Stockez les catégories dans this.livreCategories
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des catégories :', error);
      }
    );
  }

}

