# Bibliotech

# participants : Aboubacar sidiki Nabe, Erik

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.
Cette application permet de gérer des livres, des chapitres et des pages associées.

## Installation

1. Clonez ce dépôt GitHub sur votre machine locale.
2. Assurez-vous d'avoir Angular CLI installé. Sinon, vous pouvez l'installer en utilisant la commande suivante :
   
   npm install -g @angular/cli
   
4. Naviguez vers le répertoire de l'application dans votre terminal.
5. Installez les dépendances en exécutant la commande :
   npm install

## Utilisation

Pour exécuter l'application, utilisez la commande suivante dans votre terminal :
  ng serve

L'application sera alors disponible à l'adresse `http://localhost:4200` dans votre navigateur.



## Fonctionnalités

- **Inscription et Connexion :** Les utilisateurs peuvent s'inscrire et se connecter pour accéder à l'application.
- **Accueil :** Affiche la page d'accueil de l'application.
- **Mes Livres :** Permet aux utilisateurs de voir la liste de leurs livres et d'accéder aux détails de chaque livre.
- **Ajouter un Livre :** Permet aux utilisateurs d'ajouter un nouveau livre.
- **Ajouter un Chapitre :** Permet aux utilisateurs d'ajouter un nouveau chapitre à un livre existant.
- **Ajouter une Page :** Permet aux utilisateurs d'ajouter une nouvelle page à un chapitre existant.
- **Affichage de Détails :** Affiche les détails d'un livre spécifique.
- **Édition :** Permet de modifier les détails d'un livre existant.
- **Carte Livre, Carte Résumé, Carte à Lire :** Composants pour afficher des informations sur les livres de différentes manières.
- **Liste des Chapitres :** Affiche la liste des chapitres d'un livre spécifique.

## Routes

Les routes suivantes sont définies dans l'application :

- `/`: Page d'inscription.
- `/login`: Page de connexion.
- `/logout`: Page de déconnexion.
- `/home`: Page d'accueil.
- `/meslivres`: Liste des livres de l'utilisateur.
- `/addlivre`: Ajouter un nouveau livre.
- `/addchapitre`: Ajouter un nouveau chapitre.
- `/addpage`: Ajouter une nouvelle page.
- `/meslivres/detail`: Afficher les détails d'un livre.
- `/edit`: Modifier un livre existant.
- `/carteLivre`: Afficher une carte représentant un livre.
- `/carteResume`: Afficher une carte résumant un livre.
- `/carteLire`: Afficher une carte pour lire un livre.
- `/listeschapitre`: Afficher la liste des chapitres d'un livre.

## Authentification

L'authentification est requise pour accéder à certaines fonctionnalités de l'application. Un `AuthGuard` est utilisé pour protéger les routes nécessitant une authentification.

## Contributions

Les contributions à cette application sont les bienvenues. Si vous souhaitez contribuer, veuillez ouvrir une pull request en décrivant les modifications que vous proposez.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
