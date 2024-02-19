import { Component, Input, OnInit } from '@angular/core';
import { Livre, LivreListeService } from '../../../livres-list.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ApiLivreService } from '../../../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carte-lire',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carte-lire.component.html',
  styleUrl: './carte-lire.component.css',
})
export class CarteLireComponent {
  @Input() livree!: any;

  livre: Livre | undefined;
  currentChapitre: number = 1;
  chapitres: { id: number; title: string; selected: boolean }[] = [];
  currentPage: number = 1;
  currentContent: string = '';
  chapitreSelectionne: number = 0;
  totalPages: number = 1;
  chapitreName: string = '';

  constructor(
    private livreService: ApiLivreService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  // ngOnInit(): void {
  //   // Appelez getLivres() dans ngOnInit()
  //   this.livre = this.livreListeService.getLivreSelected();
  //   this.chapitres = this.getChapitresList();
  //   // Sélectionner automatiquement le chapitre en cours
  //   this.chapitreSelectionne = this.currentChapitre - 1;
  //   this.chapitreName = this.livree ? this.livree?.chapters[0].title : '';
  // }

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    // this.livre = this.livreListeService.getLivreSelected();
    // this.chapitres = this.getChapitresList();
  }

  ngOnChanges() {
    this.currentContent = this.getPageContent();
    this.totalPages =
      this.livree.chapters[this.currentChapitre - 1]?.pages.length;
    // console.log('livree dans CarteLireComponent:', this.currentContent);
    console.log(this.livree);

    // Sélectionner automatiquement le chapitre en cours
    if (
      this.livree &&
      this.livree.chapters &&
      this.livree.chapters.length > 0
    ) {
      this.chapitreName = this.livree?.chapters[this.currentChapitre - 1].title;
      this.chapitreSelectionne = this.currentChapitre - 1;
      this.chapitres = this.getChapitresList();

      console.log(
        '-------------------------------------------',
        this.chapitres
      );
    } else {
      // Gérer le cas où le livre ou ses chapitres ne sont pas définis
      this.chapitreSelectionne = 0;
      this.chapitreName = '';
    }
  }

  // Fonction pour récupérer la liste des chapitres
  getChapitresList(): { id: number; title: string; selected: boolean }[] {
    if (this.livree) {
      const chapitresList = this.livree.chapters.map(
        (chapitre: any, index: number) => {
          return { id: index + 1, title: chapitre.title, selected: false };
        }
      );

      // Marquer le chapitre courant comme sélectionné
      chapitresList[this.currentChapitre - 1].selected = true;

      return chapitresList;
    } else {
      return [];
    }
  }

  // Fonction pour récupérer le contenu de la page du chapitre courant
  getPageContent(): string {
    if (this.livree && this.livree.pages && this.livree.pages.length > 0) {
      return this.livree.pages[this.currentPage - 1].contenu;
    }
    return '';
  }

  // Méthode pour vérifier si la page actuelle est valide
  private isCurrentPageValid(): boolean {
    if (
      !this.livree ||
      !this.livree.chapters ||
      !this.livree.chapters[this.currentChapitre - 1]
    ) {
      return false; // Si livree, chapters ou le chapitre actuel n'est pas défini, la page n'est pas valide
    }

    const currentChapter = this.livree.chapters[this.currentChapitre - 1];
    return (
      this.currentPage >= 1 && this.currentPage <= currentChapter.pages.length
    );
  }

  private isNextPageValid(
    currentChapitre: number,
    currentPage: number
  ): boolean {
    return !!(
      this.livree &&
      this.livree.chapters &&
      this.livree.chapters[currentChapitre - 1] &&
      this.livree.chapters[currentChapitre - 1].pages[currentPage]
    );
  }

  // Méthode pour vérifier si la page actuelle est valide
  private isNextChapitreValid(currentChapitre: number): boolean {
    return !!(
      this.livree &&
      this.livree.chapters &&
      this.livree.chapters[currentChapitre + 1]
    );
  }
  // Méthode pour vérifier si la page actuelle est valide

  // Méthode pour aller à la page suivante
  goToNextPage(currentChapitre: number, currentPage: number): void {
    if (!this.livree || !this.livree.chapters || !this.livree.chapters.length) {
      return; // Vérifier si this.livree et ses propriétés nécessaires sont définis
    }

    const chapitre = this.livree.chapters[currentChapitre - 1];
    if (this.isNextPageValid(currentChapitre, currentPage)) {
      // Si la page suivante existe dans le chapitre actuel
      this.currentContent = chapitre.pages[currentPage].contenu;
      this.currentPage++;
    } else if (this.isNextChapitreValid(currentChapitre)) {
      // Si le chapitre suivant existe
      this.currentChapitre++;
      this.currentPage = 1; // Aller à la première page du chapitre suivant
      this.chapitreName = this.livree.chapters[this.currentChapitre - 1].title;
      this.chapitres = this.getChapitresList();
      this.currentContent = this.getPageContent();
    }
  }

  goToPreviousPage(): void {
    if (!this.livree || !this.livree.chapters || !this.livree.chapters.length) {
      return; // Vérifier si this.livree et ses propriétés nécessaires sont définis
    }

    if (this.currentPage > 1) {
      // Si ce n'est pas la première page du chapitre actuel
      this.currentPage--;
    } else if (this.currentChapitre > 1) {
      // Si c'est la première page et il y a un chapitre précédent
      this.currentChapitre--;
      this.chapitreName = this.livree.chapters[this.currentChapitre - 1].title;
      this.chapitres = this.getChapitresList();
      this.currentPage =
        this.livree.chapters[this.currentChapitre - 1].pages.length;
    }
    this.currentContent = this.getPageContent();
  }

  deletePage(livreId: number): void {
    this.livreService.deleteLivre(livreId).subscribe(
      (data) => {
        this.openSnackBar(' la suppression a réussi !');

        this.router.navigate(['/meslivres']);
      },
      (error) => {
        this.openSnackBar(
          " Vous n'êtes surement pas autorisé à supprimer ce livre !"
        );
        console.error("Erreur lors de l'inscription", error);
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000, // Durée d'affichage du toast en millisecondes
    });
  }
  editPage(pageId: number, livreId: number): void {
    this.router.navigate(['/addpage'], {
      queryParams: { livreId: livreId, pageId: pageId },
    });
  }

  ajoutePage(livreId: number, chapitreId: number): void {
    this.router.navigate(['/addpage'], {
      queryParams: { livreId: livreId, chapterId: chapitreId },
    });
  }
}
