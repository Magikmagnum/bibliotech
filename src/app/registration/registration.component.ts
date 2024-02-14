import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-registration',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roles: 'user', // Valeur par défaut du rôle
  };

  selectedRoles: string[] = [];

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  register(): void {
    this.userData.roles = this.selectedRoles.join(',');

    this.authService.register(this.userData).subscribe(
      (response) => {
        console.log('Inscription réussie', response);
        this.openSnackBar('Inscription réussie !');
        this.router.navigate(['/home']);
        // Rediriger l'utilisateur vers une autre page ou effectuer d'autres actions après une inscription réussie
      },
      (error) => {
        console.error("Erreur lors de l'inscription", error);
      }
    );
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }
}
