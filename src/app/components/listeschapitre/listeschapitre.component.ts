import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { Livre, LivreListeService } from '../../livres-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeschapitre',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './listeschapitre.component.html',
  styleUrls: [
    './listeschapitre.component.css',
    '../carteLire/carte-lire/carte-lire.component.css',
  ],
})
export class ListeschapitreComponent implements OnInit {
  @Input() livree: any;

  livre: Livre | undefined;
  curentChapitre: number = 1;
  chapitres: { id: number; nom: string }[] = [];
  curentPage: number = 1;

  chapitreSelectionne: number | null = null;

  constructor(
    private router: Router,
    private livreListeService: LivreListeService
  ) {}

  selectionnerChapitre(index: number) {
    this.chapitreSelectionne = index;
  }

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    this.livre = this.livreListeService.getLivreSelected();

    // console.log('---------------------coucou---------------------', this.livree);

    // this.livree.chapters.forEach((element: any) => {
    //   console.log(element);
    // });

    //this.chapitres = this.livreListeService.getChapitresList();
  }

  ngOnChanges() {
    this.chapitres = this.getChapitresList();
  }

  // Fonction pour récupérer la liste des chapitres
  getChapitresList(): { id: number; nom: string; selected: boolean }[] {
    if (this.livree) {
      const chapitresList = this.livree.chapters.map(
        (chapitre: any, index: number) => {
          return { id: index + 1, nom: chapitre.title, selected: false };
        }
      );

      // Marquer le chapitre courant comme sélectionné
      //chapitresList[this.currentChapitre - 1].selected = true;

      return chapitresList;
    } else {
      return [];
    }
  }

  ajouteChapitre() {
    this.router.navigate(['/addchapitre']);
  }
}
