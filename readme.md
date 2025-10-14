# Jouer contre l'ordinateur

Pour cette FOAD je vous propose de faire un jeu.  

## Git,github

Vous devez créer un nouveau dépot sur github avec votre solution pour ce jeu.

Dans votre dépot activer **github pages**.

Votre depot doit contenir les éléments suivants :

```
/assets
  /css
    style.css
  /js
    script.js
index.html
readme.md
licence.md
.gitignore
```

Faite une feuille de style pour votre jeu.

Dans votre **readme.md** vous devez en quelques phrases :
- expliquer ce que fait votre projet
- quels sont les technos utlisées
- comment et pourquoi vous avez fait tel ou tel choix

Pour me partager votre dépot , forker mon dépot de la foad et ajouter votre url dans l'emplacement **Mon url du jeu**.

##  Mon url du jeu

Mettre son l'url de votre dépot github.

## Jeu en javascript

Voici la régle du jeu :
- Le joueur et l'ordinateur ont trois pouvoirs **feu,eau,terre**
- Le **feu** bat la **terre**
- L''**eau** bat le **feu**
- La **terre** bat l'**eau**
- Egalité si le joueur et l'ordinateur ont le même pouvoir

Afin d'implémenter ce jeu en javascript on va devoir utiliser ce qu'on a vu ensemble :
- variables
- fonctions
- conditions
- tableaux
- manipulation du dom

Je vous donne un plan d'action pour réaliser ce jeu mais libre à vous d'en proposer d'autres.

Pour chaque étape tester bien votre code,fonctions,etc... via des **console.log()**.

- Faire une fonction javascript **powerPc** qui renvoie un pouvoir aléatoire de l'ordinateur , utiliser **Math.random** et **Math.floor**

- Créer 3 **boutons** dans la page html , **feu,eau,terre** 

- Récupérer la valeur du bouton clické par le joueur

- Faire une fonction **powerPlayer** qui récupere la valeur du bouton du joueur clické

- Faire une fonction **playGame** qui prend 2 parametres , le choix de l'utilisateur et le choix de l'utilisateur et les compare en fonction de la régle du jeu.  
Cette fonction renvoie une phrase en fonction du résultat.

- Afficher sur la page html ce message. 

Pour ceux qui ont finit, vous pouvez faire la suite :

- Ajouter un nombre de partie limité
- Afficher les choix du jouer et de l'ordinateur quand un bouton est clické
- Ajouter un systeme de score avec affichage du score
- Limiter la partie de jeu , le premier qui arrive à 10 points la partie s'arrete et les bouttons sont désactivés (*button.disabled = true*)
