import { Component, OnInit } from '@angular/core';
import { CarteLireComponent } from '../components/carteLire/carte-lire/carte-lire.component';
import { CarteLivreComponent } from '../components/carteLivre/carte-livre/carte-livre.component';
import { ListeschapitreComponent } from '../components/listeschapitre/listeschapitre.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CarteLireComponent, CarteLivreComponent, ListeschapitreComponent, MatFormFieldModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})


export class EditComponent {

    livre = {
      nom: "Les Rêves d'Éther",
      auteur: "Eric Gansa Diambote",
      genre: "Polar",
      image: "assets/images/img1.jpeg"
    }

    OnInit(){
      alert("coucou");
      console.log('EditComponent component');
    }
}
