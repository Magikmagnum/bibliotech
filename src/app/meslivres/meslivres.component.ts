import { LivreListeService } from './../livres-list.service';
import { CarteResumeComponent } from './../components/carteResume/carte-resume/carte-resume.component';
import { Component } from '@angular/core';
import { CarteLivreComponent } from '../components/carteLivre/carte-livre/carte-livre.component';
import { NgFor, NgForOf, NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiLivreService } from '../api.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mylivre',
  standalone: true,
  templateUrl: './meslivres.component.html',
  styleUrl: './meslivres.component.css',
  imports: [
    CarteLivreComponent,
    CarteResumeComponent,
    NgFor,
    NgForOf,
    NgIf,
    NgClass,
  ],
})
export class MeslivresComponent {
  livresStore: any = []; // Déclarez livresStore ici

  constructor(
    private livreListeService: LivreListeService,
    private apiLivreService: ApiLivreService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    this.getUserLivres();
  }

  getUserLivres(): void {
    this.apiLivreService.getLivresList().subscribe((data) => {
      this.livresStore = data;
      console.log(this.livresStore);
    });
  }
  carteLivreClique = false; // variable pour suivre si un élément a été cliqué

  // Fonction pour gérer le clic sur un élément carte livre
  // Méthode appelée lorsque vous cliquez sur la carte de livre
  onCarteLivreClick(id: number) {
    this.livreListeService.setLivreSelectId(id);
    this.router.navigate(['/home/show'], { queryParams: { livreId: id } });
  }

  addLivreNav() {
    this.router.navigate(['/addlivre']);
    // this.router.navigate(['/edit']);
  }
  addChapterNav() {
    this.router.navigate(['/addchapitre']);
  }
  addPageNav() {
    this.router.navigate(['/addpage']);
  }
}
