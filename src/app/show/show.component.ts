import { Component } from '@angular/core';
import { CarteLireComponent } from '../components/carteLire/carte-lire/carte-lire.component';
import { CarteLivreComponent } from '../components/carteLivre/carte-livre/carte-livre.component';
import { ListeschapitreComponent } from '../components/listeschapitre/listeschapitre.component';
import { ApiLivreService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

interface Livre {}
@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CarteLireComponent, CarteLivreComponent, ListeschapitreComponent],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css',
})
export class ShowComponent {
  constructor(
    private apiLivreService: ApiLivreService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  livre: any = {};
  livreId: any;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.livreId = params['livreId'];
    });
    this.getLivre();
  }

  getLivre(): void {
    this.apiLivreService.getLivre(this.livreId).subscribe((response) => {
      this.livre = response;
      console.log(response);
    });
  }
}
