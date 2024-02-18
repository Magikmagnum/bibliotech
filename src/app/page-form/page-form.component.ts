import { Component } from '@angular/core';


import { ApiCatService, ApiLivreService } from '../api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

interface LivreData {
  title: string;
  resume: string;
  image: FormData | null;
  categories: number[];
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
  styleUrls: ['./page-form.component.css', '../login/login.component.css']
})
export class PageFormComponent {
  page: string = '';

  public addPages(): void {

  }
}
