import { LivreListeService } from './../livres-list.service';
import { CarteResumeComponent } from './../components/carteResume/carte-resume/carte-resume.component';
import { Component } from '@angular/core';
import { CarteLivreComponent } from '../components/carteLivre/carte-livre/carte-livre.component';
import { NgFor, NgForOf, NgIf, NgClass } from '@angular/common';
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
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    CarteLivreComponent,
    CarteResumeComponent,
    NgFor,
    NgForOf,
    NgIf,
    NgClass,
  ],
})
export class HomeComponent {
  livresStore: any = []; // Déclarez livresStore ici

  constructor(
    private livreListeService: LivreListeService,
    private apiLivreService: ApiLivreService
  ) {}

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    this.getLivres();
  }

  carteLivreClique = false; // variable pour suivre si un élément a été cliqué

  livreClicked = null;
  getLivres(): void {
    this.apiLivreService.getLivres().subscribe((data) => {
      this.livresStore = data;
    });
  }
  // Fonction pour gérer le clic sur un élément carte livre
  // Méthode appelée lorsque vous cliquez sur la carte de livre
  onCarteLivreClick(clicked: any) {
    this.livreClicked = clicked;
    this.carteLivreClique = !this.carteLivreClique; // Inverse la valeur de carteLivreClique
  }
}
