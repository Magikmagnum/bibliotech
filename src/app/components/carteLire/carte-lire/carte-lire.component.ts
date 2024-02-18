import { Component, Input, OnInit  } from '@angular/core';
import { Livre, LivreListeService } from '../../../livres-list.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte-lire',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carte-lire.component.html',
  styleUrl: './carte-lire.component.css'
})
export class CarteLireComponent {

  @Input()livree!: any;


  livre: Livre | undefined;
  currentChapitre: number = 1;
  chapitres: { id: number, nom: string, selected: boolean }[] = [];
  currentPage: number = 1;
  currentContent: string = '';
  chapitreSelectionne: number = 0;
  totalPages: number = 1;
  chapitreName: string = '';

  constructor(private livreListeService: LivreListeService, private router: Router, ) { }

  ngOnInit(): void {

    console.log('livree dans CarteLireComponent:', this.livree);

    // Appelez getLivres() dans ngOnInit()
    this.livre = this.livreListeService.getLivreSelected();
    this.chapitres = this.getChapitresList();
    this.currentContent = this.getPageContent();
    // Sélectionner automatiquement le chapitre en cours
    this.chapitreSelectionne = this.currentChapitre - 1;
    this.chapitreName = this.livre ? this.livre.chapitres[this.currentChapitre -1 ].nom : '';

  }

  // ngOnChanges() {
  //   console.log('livree dans ngOnChanges:', this.livree);
  // }


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

    if(this.livree.pages.length > 0) {
      return this.livree.pages[0];
    }

    return '';
    // if (this.livre && this.currentChapitre >= 1 && this.currentChapitre <= this.livre.chapitres.length) {
    //   const chapitre = this.livre.chapitres[this.currentChapitre - 1];
    //   if (this.currentPage >= 1 && this.currentPage <= chapitre.pages.length) {
    //     return chapitre.pages[this.currentPage - 1].content;
    //   }
    // }
    // return '';
  }



  // Méthode pour vérifier si la page actuelle est valide
  private isCurrentPageValid(): boolean {
    return !!(
      this.livre &&
      this.livre.chapitres &&
      this.livre.chapitres[this.currentChapitre - 1] &&
      this.currentPage >= 1 &&
      this.currentPage <= this.livre.chapitres[this.currentChapitre - 1].pages.length
    );
  }


  // Méthode pour vérifier si la page actuelle est valide
  private isNextPageValid(currentChapitre: number, currentPage: number): boolean {
    return !!(
      this.livre &&
      this.livre.chapitres &&
      this.livre.chapitres[currentChapitre] &&
      this.livre.chapitres[currentChapitre].pages[currentPage + 1]
    );

  }


  // Méthode pour vérifier si la page actuelle est valide
  private isNextChapitreValid(currentChapitre: number): boolean {
    return !!(
      this.livre &&
      this.livre.chapitres &&
      this.livre.chapitres[currentChapitre + 1]
    );
  }

  // Méthode pour aller à la page suivante
  goToNextPage(currentChapitre: number, currentPage : number): void {


    if (!this.livre || !this.livre.chapitres || !this.livre.chapitres.length || !this.isCurrentPageValid()) {
      return; // Vérifier si this.livre et ses propriétés nécessaires sont définis
    }

    // si la page suivant existe on recupere la recupere
    if(this.isNextPageValid(currentChapitre - 1, (currentPage - 1))) {

      const chapitre = this.livre.chapitres[currentChapitre - 1 ];

      // On met a jout le chapitre
      this.chapitreName = this.livre.chapitres[this.currentChapitre - 1 ].nom;

      // On recupere les pages suivante.
      this.currentContent =  chapitre.pages[currentPage].content;
      // On incremente le numero la page courante.
      this.currentPage++;
      this.totalPages++;

    // Si la page suivante n'existe pas.
    } else if(this.isNextChapitreValid(currentChapitre - 1)){
      // On incremente le chapitre suivant
      const chapitre = this.livre.chapitres[currentChapitre];

      // On met a jout le chapitre
      this.chapitreName = this.livre.chapitres[this.currentChapitre].nom;

      // On recupere la premier page
      this.currentContent =  chapitre.pages[0].content;
      // On incremente le numero la page suivante.
      this.currentPage = 1;
      this.currentChapitre++;
      this.totalPages++;
    }
  }

  // Méthode pour aller à la page précédente
  goToPreviousPage(): void {

    if (!this.livre || !this.livre.chapitres || !this.livre.chapitres.length || !this.isCurrentPageValid()) {
      return; // Vérifier si this.livre et ses propriétés nécessaires sont définis
    }

    const currentChapter = this.livre.chapitres[this.currentChapitre - 1];
    if (this.currentPage > 1) {
      // Si ce n'est pas la première page du chapitre actuel, reculer d'une page
      this.currentPage--;
      this.totalPages--;
    } else if (this.currentChapitre > 1) {
      // Si c'est la première page du chapitre actuel et qu'il y a un chapitre précédent, passer au chapitre précédent
      this.currentChapitre--;
      const previousChapter = this.livre.chapitres[this.currentChapitre - 1];
      // Aller à la dernière page du chapitre précédent
      this.currentPage = previousChapter.pages.length;
      this.totalPages--;
    }

    this.currentContent = this.getPageContent();
  }


  deletePage(livreId: number, chapitreId: number, pageId: number): void {
    this.router.navigate(['/addpage'], { queryParams: { livreId, chapitreId, pageId } });
  }


  editPage(livreId: number, chapitreId: number, pageId: number): void {
    this.router.navigate(['/addpage'], { queryParams: { livreId, chapitreId, pageId } });

  }


  ajoutePage(livreId: number, chapitreId: number, pageId: number): void {
    this.router.navigate(['/addpage'], { queryParams: { livreId, chapitreId, pageId } });
  }

}




// recuperer la liste des chapitres
// recuperer la liste des pages
// recuperer le text
