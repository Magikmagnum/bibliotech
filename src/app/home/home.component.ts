import { LivreListeService } from './../livres-list.service';
import { CarteResumeComponent } from './../components/carteResume/carte-resume/carte-resume.component';
import { Component,  } from '@angular/core';
import { CarteLivreComponent } from "../components/carteLivre/carte-livre/carte-livre.component";
import {NgFor, NgForOf, NgIf, NgClass} from "@angular/common";

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
    imports: [CarteLivreComponent, CarteResumeComponent,  NgFor, NgForOf, NgIf, NgClass]
})
export class HomeComponent {

  livresStore: any[] = []; // Déclarez livresStore ici

  constructor(private livreListeService: LivreListeService) {}

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    this.livresStore = this.livreListeService.getLivres();
  }

  carteLivreClique = false; // variable pour suivre si un élément a été cliqué


  // Fonction pour gérer le clic sur un élément carte livre
  // Méthode appelée lorsque vous cliquez sur la carte de livre
  onCarteLivreClick(id: number) {
    this.livreListeService.setLivreSelectId(id);
    this.carteLivreClique = !this.carteLivreClique; // Inverse la valeur de carteLivreClique
  }

}
