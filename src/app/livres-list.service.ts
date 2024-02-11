import { Injectable } from "@angular/core";


export interface Livre {
  id: number;
  nom: string;
  auteur: string;
  genre: string;
  image: string;
  chapitres: {
    nom: string;
    pages: {
      numero: number;
      content: string;
    }[];
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class LivreListeService {

  private livres: Livre[] = [
    {
      id: 1,
      nom: "Les Rêves d'Éther",
      auteur: "Eric Gansa Diambote",
      genre: "Polar",
      image: "assets/images/img1.jpeg",
      chapitres: [
        {
          nom: "Les Rêves d'Éther",
          pages: [
            {
              numero: 1,
              content: "Emma se réveilla un matin dans un monde où ses rêves étaient devenus réalité. Chaque coin de rue, chaque visage rencontré lui semblait familier, comme si elle avait déjà vécu ces moments dans un rêve lointain. Intriguée et un peu effrayée, elle décida de suivre le fil de son destin, guidée par une force mystérieuse."
            },
            {
              numero: 2,
              content: "Au fil de son périple, elle rencontra des personnages étranges et fascinants, chacun portant une part de vérité sur sa propre existence. Elle découvrit des secrets enfouis depuis des siècles, des histoires entrelacées qui semblaient converger vers un seul point : la résolution de son propre mystère."
            },
            {
              numero: 3,
              content: "Mais plus elle se rapprochait de la vérité, plus les obstacles se dressaient sur son chemin. Des forces obscures tentaient de l'éloigner de sa quête, de la plonger dans les ténèbres de l'oubli. Elle devait puiser au plus profond d'elle-même pour surmonter ces épreuves et atteindre enfin la clarté tant recherchée."
            },
            {
              numero: 4,
              content: "Dans un final époustouflant, Emma découvrit enfin la signification de ses rêves, la raison pour laquelle elle avait été choisie pour cette quête extraordinaire. Et dans ce moment de révélation, elle comprit que la frontière entre le rêve et la réalité n'était qu'une illusion, que seul l'amour véritable pouvait transcender toutes les barrières."
            }
          ]
        },
        {
          nom: "Les Terres Inconnues",
          pages: [
            {
              numero: 1,
              content: "La suite captivante des aventures d'Emma l'emmena loin des contrées familières, dans des terres inexplorées où le danger guettait à chaque tournant. Accompagnée de ses fidèles compagnons, elle affronta des épreuves encore plus redoutables, des ennemis plus implacables."
            },
            {
              numero: 2,
              content: "Mais elle puisa dans sa force intérieure et dans l'amour qui la guidait, surmontant tous les obstacles avec courage et détermination. Et lorsqu'elle atteignit enfin son objectif, elle découvrit que le vrai trésor n'était pas celui qu'elle cherchait, mais les liens qu'elle avait tissés en chemin, les amitiés forgées dans le feu de l'adversité."
            },
            {
              numero: 3,
              content: "Les Terres Inconnues étaient désormais gravées dans son cœur, un rappel constant de la force de l'amour et de la bravoure humaine. Et alors qu'elle retournait chez elle, elle savait que son voyage ne faisait que commencer, que de nouvelles aventures l'attendaient au détour de chaque nouvelle page."
            },
            {
              numero: 4,
              content: "Car tant que l'amour brûlerait en elle, rien ne pourrait l'arrêter, rien ne pourrait l'empêcher de poursuivre son destin."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nom: "Le Mystère de la Chambre Jaune",
      auteur: "Gaston Leroux",
      genre: "Mystère",
      image: "assets/images/img2.jpeg",
      chapitres: [
        {
          nom: "La Disparition",
          pages: [
            {
              numero: 1,
              content: "Dans une nuit d'automne, une ombre s'échappa silencieusement par la fenêtre entrouverte de la chambre jaune, laissant derrière elle un mystère insoluble."
            },
            {
              numero: 2,
              content: "Le lendemain matin, lorsque la lumière du jour pénétra dans la pièce, elle révéla un spectacle étrange : la chambre était vide, les meubles renversés, mais aucune trace de l'intrus."
            },
            {
              numero: 3,
              content: "Le commissaire Rouletabille fut immédiatement dépêché sur les lieux, son esprit vif et son regard perçant prêts à percer les ténèbres de ce mystère apparemment insoluble."
            },
            {
              numero: 4,
              content: "Et alors que les heures s'écoulaient, que les suspects se succédaient, une seule question persistait : comment quelqu'un avait-il pu disparaître d'une chambre fermée à clé, sans laisser aucune trace derrière lui ?"
            }
          ]
        },
        {
          nom: "La Résolution",
          pages: [
            {
              numero: 1,
              content: "Avec une astuce et une détermination sans faille, Rouletabille démêla les fils de l'intrigue, révélant la vérité cachée sous les apparences."
            },
            {
              numero: 2,
              content: "Et lorsque enfin la lumière fut faite, lorsque le coupable fut démasqué, ce fut un moment de triomphe pour le commissaire et pour la justice elle-même."
            },
            {
              numero: 3,
              content: "Car même dans les ténèbres les plus profondes, même dans les mystères les plus obscurs, la vérité finit toujours par triompher, éclairant le chemin des justes et condamnant les coupables."
            },
            {
              numero: 4,
              content: "Et ainsi, une fois de plus, la lumière brilla dans l'obscurité, révélant les secrets cachés et rétablissant l'ordre là où règnent le chaos et la confusion."
            }
          ]
        }
      ]
    },
    {
      id: 3,
      nom: "Le Tour du monde en quatre-vingts jours",
      auteur: "Jules Verne",
      genre: "Aventure",
      image: "assets/images/img3.jpeg",
      chapitres: [
        {
          nom: "Départ vers l'inconnu",
          pages: [
            {
              numero: 1,
              content: "Phileas Fogg, gentleman anglais impassible et méthodique, fait le pari insensé de parcourir le monde en quatre-vingts jours. Accompagné de son fidèle serviteur, Passepartout, il entame un voyage épique à travers des contrées lointaines et des cultures exotiques, affrontant mille et un dangers pour remporter son défi."
            },
            {
              numero: 2,
              content: "Du train à la montgolfière, de la course effrénée à la négociation habile, Phileas Fogg use de tous les moyens pour avancer, déterminé à prouver au monde entier que rien n'est impossible pour qui possède la volonté et la détermination."
            },
            {
              numero: 3,
              content: "Mais tandis que les jours défilent et que les obstacles s'accumulent, la tâche semble de plus en plus insurmontable. Les ennemis rôdent, les complots se trament, et Phileas Fogg doit puiser au plus profond de son courage pour surmonter ces épreuves et atteindre enfin son objectif ultime."
            },
            {
              numero: 4,
              content: "Dans un final haletant, Phileas Fogg affronte son destin, prêt à tout sacrifier pour prouver sa valeur et accomplir l'impossible. Et dans cette course contre la montre, il découvre que le véritable voyage n'est pas celui qui nous mène autour du monde, mais celui qui nous conduit au plus profond de nous-mêmes."
            }
          ]
        },
        {
          nom: "L'Arrivée Triomphale",
          pages: [
            {
              numero: 1,
              content: "Après mille et un périples, Phileas Fogg atteint enfin la ligne d'arrivée, accueilli par les acclamations d'une foule en délire. Son exploit incroyable est salué par tous, sa détermination et son courage faisant de lui un véritable héros aux yeux du monde entier."
            },
            {
              numero: 2,
              content: "Mais au-delà de la gloire et de la renommée, Phileas Fogg découvre que le véritable trésor de son voyage n'est pas la victoire en elle-même, mais les rencontres qu'il a faites en chemin, les leçons qu'il a apprises, et l'amour qu'il a trouvé dans les bras de celle qui l'a accompagné jusqu'au bout."
            },
            {
              numero: 3,
              content: "Et alors qu'il contemple le monde qui s'étend devant lui, Phileas Fogg réalise que le vrai voyage ne fait que commencer, que chaque jour apporte son lot de découvertes et d'aventures. Car tant que l'esprit humain restera avide de découvertes, tant que le cœur humain battra au rythme de l'aventure, le tour du monde en quatre-vingts jours ne sera jamais qu'un simple chapitre dans l'histoire infinie de l'exploration humaine."
            },
            {
              numero: 4,
              content: "Et ainsi, Phileas Fogg s'élança vers de nouveaux horizons, prêt à affronter l'inconnu avec la même détermination et la même passion qui l'avaient conduit autour du monde. Car pour celui qui ose rêver, pour celui qui ose agir, le monde entier est un terrain de jeu infini, où chaque instant est une nouvelle aventure à vivre, et où chaque destination est un nouveau départ vers l'inconnu."
            }
          ]
        }
      ]
    },
    {
      id: 4,
      nom: "1984",
      auteur: "George Orwell",
      genre: "Science-fiction",
      image: "assets/images/img4.jpg",
      chapitres: [
        {
          nom: "La Surveillance Totale",
          pages: [
            {
              numero: 1,
              content: "Dans un monde où la liberté est un souvenir lointain et où la vérité est une notion flexible, Winston Smith lutte pour préserver son humanité au milieu de l'oppression omniprésente du Parti. Sous le regard inquisiteur du Big Brother, il tente désespérément de maintenir un semblant de normalité, même au prix de sa propre sécurité."
            },
            {
              numero: 2,
              content: "Mais chaque pas dans l'ombre de la surveillance totale est un pas de plus vers l'abîme de la désillusion. Les mensonges du passé se mêlent aux mensonges du présent, et Winston se retrouve piégé dans un labyrinthe de tromperies et de manipulations, sans espoir de trouver un chemin vers la vérité."
            },
            {
              numero: 3,
              content: "Et tandis que la société se referme autour de lui, Winston réalise que la résistance est futile, que la rébellion est vaine. Dans un monde où la pensée elle-même est un crime, où l'individu est submergé par le collectif, il n'y a plus de place pour la liberté, plus de place pour l'espoir."
            },
            {
              numero: 4,
              content: "Et dans un dernier acte de défiance, Winston ose s'élever contre l'oppression, prêt à sacrifier tout ce qu'il a pour retrouver ne serait-ce qu'un fragment de dignité humaine. Car même dans les ténèbres les plus profondes, même dans la désolation la plus totale, il reste toujours une étincelle de résistance, un souffle de rébellion, prêt à rallumer la flamme de la liberté."
            }
          ]
        },
        {
          nom: "La Chute du Big Brother",
          pages: [
            {
              numero: 1,
              content: "Dans un dernier élan de désespoir, Winston se lance dans un combat désespéré contre le régime totalitaire qui étouffe la société. Avec l'aide de ses alliés improbables, il monte une rébellion clandestine, un acte de défiance contre l'oppression implacable du Parti."
            },
            {
              numero: 2,
              content: "Mais la route vers la liberté est semée d'embûches, et chaque"
            },
          ]
        }
      ]
    },
    {
      id: 5,
      nom: "Le Seigneur des Anneaux",
      auteur: "J.R.R. Tolkien",
      genre: "Fantasy",
      image: "assets/images/img6.jpeg",
      chapitres: [
        {
          nom: "La Communauté de l'Anneau",
          pages: [
            {
              numero: 1,
              content: "Dans la paisible Comté, le hobbit Frodon Sacquet hérite d'un anneau magique autrefois possédé par le sombre Seigneur des Ténèbres, Sauron. Bientôt, Frodon se rend compte que cet anneau est une menace pour toute la Terre du Milieu et qu'il doit entreprendre un voyage périlleux pour le détruire."
            },
            {
              numero: 2,
              content: "Avec ses compagnons, les hobbits Sam, Merry et Pippin, ainsi que les représentants des autres peuples libres, Frodon se lance dans une quête épique pour jeter l'Anneau dans les feux de la Montagne du Destin, où il a été forgé."
            },
            {
              numero: 3,
              content: "Leur voyage les mène à travers des terres dangereuses et des rencontres avec des créatures fantastiques, mais aussi à des amitiés inattendues et à des actes de bravoure. Mais alors que Sauron déploie ses forces pour récupérer l'Anneau, la Communauté de l'Anneau doit faire face à des choix difficiles et à des sacrifices déchirants."
            },
            {
              numero: 4,
              content: "Le Seigneur des Anneaux est une histoire de courage, d'amitié, de sacrifice et de la lutte éternelle entre le bien et le mal. À travers les yeux de Frodon et de ses compagnons, J.R.R. Tolkien nous emmène dans un monde de magie et de merveilles, où l'espoir peut être trouvé même dans les ténèbres les plus profondes."
            }
          ]
        },
        {
          nom: "Les Deux Tours",
          pages: [
            {
              numero: 1,
              content: "Le voyage continue pour Frodon et ses compagnons alors qu'ils se séparent de la Communauté de l'Anneau. Tandis que Frodon et Sam continuent leur quête solitaire vers le Mordor, Merry et Pippin tombent entre les mains des Orques, déclenchant une série d'événements qui changera le cours de la guerre."
            },
            {
              numero: 2,
              content: "Pendant ce temps, Aragorn, Legolas et Gimli poursuivent les Orques à travers les plaines du Rohan, où ils rencontrent le roi déchu Théoden et sa sœur, la noble Éowyn. Ensemble, ils s'unissent pour affronter les forces de Sauron dans une bataille épique pour le contrôle du Rohan."
            },
            {
              numero: 3,
              content: "Les Deux Tours est un récit de guerre, de trahison et de renouveau. Alors que les héros de la Terre du Milieu se battent pour la liberté, de nouveaux héros émergent et de nouvelles alliances se forment dans la lutte contre les ténèbres qui menacent de détruire le monde tel qu'ils le connaissent."
            },
            {
              numero: 4,
              content: "Et à travers tout cela, l'Anneau continue d'exercer son influence maléfique, pesant sur ceux qui le portent et les tentant de céder à sa puissance. Seul le courage et la détermination de quelques-uns peuvent espérer triompher de cette force terrible et restaurer la paix dans la Terre du Milieu."
            }
          ]
        }
      ]
    },
    {
      id: 6,
      nom: "Harry Potter à l'école des sorciers",
      auteur: "J.K. Rowling",
      genre: "Fantasy",
      image: "assets/images/img7.jpeg",
      chapitres: [
        {
          nom: "La Naissance d'un Sorcier",
          pages: [
            {
              numero: 1,
              content: "Harry Potter est un jeune garçon ordinaire vivant chez son oncle et sa tante, les Dursley. Mais le jour de ses onze ans, il découvre qu'il est en fait un sorcier, et qu'il a été accepté à l'école de sorcellerie Poudlard."
            },
            {
              numero: 2,
              content: "À Poudlard, Harry se lie d'amitié avec Ron Weasley et Hermione Granger, et découvre un monde de magie et d'aventure auquel il n'aurait jamais cru possible. Mais il découvre aussi que le passé de ses parents est lié à celui du sorcier le plus sombre de tous les temps, Lord Voldemort."
            },
            {
              numero: 3,
              content: "Alors que Harry apprend à maîtriser ses pouvoirs et à naviguer dans le monde sorcier, il se retrouve également confronté à des mystères et des dangers qui menacent non seulement sa propre vie, mais aussi celle de tous ceux qu'il aime."
            },
            {
              numero: 4,
              content: "Harry Potter à l'école des sorciers est le début d'une saga épique de courage, d'amitié et de magie. À travers les yeux de Harry, nous entrons dans un monde enchanté où rien n'est ce qu'il semble être, et où le pouvoir de l'amitié et de l'espoir peut triompher même des forces les plus obscures."
            }
          ]
        },
        {
          nom: "Les Mystères de Poudlard",
          pages: [
            {
              numero: 1,
              content: "Alors que l'année scolaire à Poudlard progresse, Harry et ses amis se retrouvent plongés dans une série d'événements mystérieux et dangereux. Des étranges attaques ont lieu dans l'école, mettant en danger la vie des élèves et plongeant Poudlard dans la peur et la suspicion."
            },
            {
              numero: 2,
              content: "Harry, Ron et Hermione se lancent dans une quête pour découvrir la vérité derrière ces attaques, ce qui les mène à des secrets enfouis depuis longtemps et à des révélations choquantes sur l'histoire de Poudlard et sur le passé de Voldemort."
            },
            {
              numero: 3,
              content: "Alors que les tensions montent et que les dangers s'intensifient, Harry se retrouve face à un choix impossible : abandonner ou affronter le mal qui menace de détruire tout ce qu'il aime. Avec l'aide de ses amis et de ses alliés, Harry décide de se battre, même s'il doit affronter Voldemort lui-même."
            },
            {
              numero: 4,
              content: "Harry Potter à l'école des sorciers est une histoire de courage, d'amitié et de sacrifice. C'est une histoire qui montre que même dans les moments les plus sombres, il y a de la lumière à trouver, et que l'espoir peut triompher de la peur."
            }
          ]
        }
      ]
    },
  ];

  private curentLivre: number = 0;

  public getLivres(): Livre[] | [] {
    return this.livres;
  }

  public setLivreSelectId(id: number): void {
    this.curentLivre = id;
  }

  public getLivreSelected(): Livre | undefined {
    return this.livres.find(livre => livre.id === this.curentLivre);
  }

  public getChapitresList(): { id: number, nom: string }[] {
    const livre = this.getLivreSelected();

    if (livre) {
      return livre.chapitres.map((chapitre, index) => {
        return { id: index + 1, nom: chapitre.nom };
      });
    } else {
      return [];
    }
  }
}
