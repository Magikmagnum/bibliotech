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
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { LivreFormComponent } from './livre-form/livre-form.component';
import { ChapitreFormComponent } from './chapitre-form/chapitre-form.component';
import { PageFormComponent } from './page-form/page-form.component';

// import { AuthenticationService } from './services/authentication.service';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home/show', component: ShowComponent, canActivate: [AuthGuard] },
  {
    path: 'meslivres',
    component: MeslivresComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addlivre',
    component: LivreFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addChapter',
    component: ChapitreFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addchapitre',
    component: ChapitreFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addpage',
    component: PageFormComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'meslivres/detail',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'meslivres/edit',
    component: DetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'carteLivre',
    component: CarteLivreComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'carteResume',
    component: CarteResumeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'carteLire',
    component: CarteLireComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listeschapitre',
    component: ListeschapitreComponent,
    canActivate: [AuthGuard],
  },
];
