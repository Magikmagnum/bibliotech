import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LivreListeService } from '../../../livres-list.service';

@Component({
  selector: 'app-carte-resume',
  standalone: true,
  imports: [],
  templateUrl: './carte-resume.component.html',
  styleUrl: './carte-resume.component.css'
})
export class CarteResumeComponent {

  livreNom: string | undefined = "";
  livreAuteur: string | undefined  = "";
  livreGenre: string | undefined = "";
  livreImage: string | undefined = "";

  constructor(private router: Router, private livreListeService: LivreListeService) { };

  ngOnInit(): void {
    // Appelez getLivres() dans ngOnInit()
    const livre = this.livreListeService.getLivreSelected();
    
    this.livreNom = livre?.nom;
    this.livreAuteur = livre?.auteur;
    this.livreGenre = livre?.genre;
    this.livreImage = livre?.image;
  }

  goTo() {
    // Naviguer vers la route home/show
    this.router.navigate(['/home/show']);
  }
}
