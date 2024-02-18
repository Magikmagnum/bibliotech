import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userData = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.userData).subscribe((response: any) => {
      this.authService.storeToken(response.access_token);
      this.authService.isLoggedIn = true;
      this.openSnackBar('Connexion réussie !');
      this.router.navigate(['/home']);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }
}
