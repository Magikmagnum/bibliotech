import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LivreListeService } from '../../../livres-list.service';

@Component({
  selector: 'app-carte-resume',
  standalone: true,
  imports: [],
  templateUrl: './carte-resume.component.html',
  styleUrl: './carte-resume.component.css',
})
export class CarteResumeComponent {
  @Input() livre!: any;

  livreNom: string | undefined = '';
  livreAuteur: string | undefined = '';
  livreGenre: string | undefined = '';
  livreImage: string | undefined = '';
  livreResume: string | undefined = '';

  constructor(
    private router: Router,
    private livreListeService: LivreListeService
  ) {}

  ngOnChanges(): void {
    // Appelez getLivres() dans ngOnInit()
    console.log(this.livre);
    const livre = this.livre;

    this.livreNom = livre?.title;
    this.livreAuteur = livre?.author?.firstName;
    this.livreGenre = '';
    this.livreImage = livre?.image;
    this.livreResume = livre?.resume;
  }

  goTo() {
    // Naviguer vers la route home/show
    this.router.navigate(['/home/show'], {
      queryParams: {
        livreId: this.livre.id,
      },
    });
  }
}
