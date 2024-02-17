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
    roles: 'user', // Valeur par défaut du rôle
  };

  selectedCategories: string[] = [];

  addLivre() {

  }

}
