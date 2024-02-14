import { Component } from '@angular/core';
import { CarteLireComponent } from '../components/carteLire/carte-lire/carte-lire.component';
import { CarteLivreComponent } from '../components/carteLivre/carte-livre/carte-livre.component';
import { ListeschapitreComponent } from '../components/listeschapitre/listeschapitre.component';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CarteLireComponent, CarteLivreComponent, ListeschapitreComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})


export class ShowComponent {
    livre = {
      nom: "Les Rêves d'Éther",
      auteur: "Eric Gansa Diambote",
      genre: "Polar",
      image: "assets/images/img1.jpeg"
    }
}
