import { Component, Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { Livre, LivreListeService } from '../../livres-list.service';

@Component({
  selector: 'app-listeschapitre',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './listeschapitre.component.html',
  styleUrl: './listeschapitre.component.css'
})
export class ListeschapitreComponent implements OnInit {

  @Input() livree: any;
  livre: Livre | undefined;
  curentChapitre: number = 1;
  chapitres: { id: number, nom: string }[] = [];
  curentPage: number = 1;

  chapitreSelectionne: number | null = null;


  constructor(private livreListeService: LivreListeService) { }


  selectionnerChapitre(index: number) {
    this.chapitreSelectionne = index;
  }


  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    this.livre = this.livreListeService.getLivreSelected();
    this.chapitres = this.livreListeService.getChapitresList();
  }
}
