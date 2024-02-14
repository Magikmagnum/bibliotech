import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeslivresComponent } from './meslivres/meslivres.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './meslivres/detail/detail.component';
import { inject } from '@angular/core';
import { CarteLivreComponent } from './components/carteLivre/carte-livre/carte-livre.component';
import { CarteResumeComponent } from './components/carteResume/carte-resume/carte-resume.component';
import { CarteLireComponent } from './components/carteLire/carte-lire/carte-lire.component';
import { ListeschapitreComponent } from './components/listeschapitre/listeschapitre.component';
// import { AuthenticationService } from './services/authentication.service';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'home/show', component: ShowComponent},
    {
      path: 'meslivres',
      // canMatch:[() => inject(AuthenticationService).isAuthenticated],
      component: MeslivresComponent
    },
    { path: 'meslivres/detail', component: EditComponent },
    { path: 'meslivres/edit', component: DetailComponent },
    { path: 'carteLivre', component: CarteLivreComponent },
    { path: 'carteResume', component: CarteResumeComponent },
    { path: 'carteLire', component: CarteLireComponent },
    { path: 'listeschapitre', component: ListeschapitreComponent },
];
