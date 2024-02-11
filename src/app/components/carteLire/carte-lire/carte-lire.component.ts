import { Component, OnInit  } from '@angular/core';
import { Livre, LivreListeService } from '../../../livres-list.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-carte-lire',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carte-lire.component.html',
  styleUrl: './carte-lire.component.css'
})
export class CarteLireComponent implements OnInit {

  livre: Livre | undefined;
  currentChapitre: number = 1;
  chapitres: { id: number, nom: string, selected: boolean }[] = [];
  currentPage: number = 1;
  currentContent: string = '';

  constructor(private livreListeService: LivreListeService) { }

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    this.livre = this.livreListeService.getLivreSelected();
    this.chapitres = this.getChapitresList();
    this.currentContent = this.getPageContent();
  }


  // Fonction pour récupérer la liste des chapitres
  getChapitresList(): { id: number, nom: string, selected: boolean }[] {
    if (this.livre) {
      const chapitresList = this.livre.chapitres.map((chapitre, index) => {
        return { id: index + 1, nom: chapitre.nom, selected: false };
      });

      // Marquer le chapitre courant comme sélectionné
      chapitresList[this.currentChapitre - 1].selected = true;

      return chapitresList; 
    } else {
      return [];
    }
  }


  // Fonction pour récupérer le contenu de la page du chapitre courant
  getPageContent(): string {
    if (this.livre && this.currentChapitre >= 1 && this.currentChapitre <= this.livre.chapitres.length) {
      const chapitre = this.livre.chapitres[this.currentChapitre - 1];
      if (this.currentPage >= 1 && this.currentPage <= chapitre.pages.length) {
        return chapitre.pages[this.currentPage - 1].content;
      }
    }
    return '';
  }


  // Méthode pour aller à la page suivante
  goToNextPage(): void {
    if (this.livre && this.livre.chapitres && this.livre.chapitres[this.currentChapitre - 1] && this.currentPage < this.livre.chapitres[this.currentChapitre - 1].pages.length) {
      this.currentPage++;
      this.currentContent = this.getPageContent();
    }
  }

  // Méthode pour aller à la page précédente
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentContent = this.getPageContent();
    }
  }

}




// recuperer la liste des chapitres
// recuperer la liste des pages
// recuperer le text
