let personnage = {
    nom: "Ahmed",
    lieu: "maison",
    argent: 19,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(lieu) {
        this.lieu = lieu.nom;
        console.log(`${this.nom} se déplace vers ${lieu.nom}.`);
    },
    payerArticle(article) {
        if (this.argent >= article.prix) {
            this.argent -= article.prix;
            console.log(`${this.nom} a payé ${article.prix}€ pour ${article.nom}.`);
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${article.nom}.`);
        }
    },
    couper(ingredient, outil) {
        if (ingredient.etats.includes("entier")) {
            ingredient.etats = "coupé";
            console.log(`${ingredient.nom} a été coupé avec ${outil.nom}.`);
        }
    }
};



let maison = {
    nom: "maison",
    personnes: [] //personnes dans la maison
};

let epicerie = {
    nom: "épicerie",
    personnes: [], //personnes dans l'épicerie
    paniers: [{ type: "panier", contenu: [] }, { type: "panier", contenu: [] }]
};

// Testtest tessst
console.log(`Début : ${personnage.nom} est à la ${personnage.lieu}`);
personnage.seDeplacer(epicerie);
console.log(`${personnage.nom} est maintenant à la ${personnage.lieu}`);

// listes disponibles à l'épicerie
epicerie.ingredients = [
    { nom: "oignon", etat: "entier", prix: 2 },
    { nom: "oeuf", etat: "entier", prix: 3 },
    { nom: "fromage", etat: "entier", prix: 4 },
    { nom: "épices", etat: "entier", prix: 1 }
];

// pour la prise de panier
personnage.prendrePanier = function () {
    if (epicerie.paniers.length > 0) {
        let panier = epicerie.paniers.pop(); // pourretirer au panier 
        this.mainDroite.push(panier); // pour ajouter au panier
        console.log(`${this.nom} a pris un panier.`);
    } else {
        console.log(`Il n'y a plus de panier disponible à l'épicerie`);
    }
};

personnage.seDeplacer(epicerie);
personnage.prendrePanier();
console.log(`${personnage.nom} a dans sa main droite :`, personnage.mainDroite);

// test à voit si
epicerie.ingredients.forEach((ingredient) => {
    // ajouter au panier
    personnage.mainDroite[0].contenu.push(ingredient);
    // msg cet ingrediant à ete ajouté 
    console.log(`${personnage.nom} a ajouté ${ingredient.nom} dans le panier`);

    personnage.payerArticle(ingredient);
    // afficher l'argent qu'il reste 
    console.log(`${personnage.nom} a maintenant ${personnage.argent}€`);
});
//objet bol 
let bol = {
    contenu: [],
    melanger(nomDuMelange) {
        this.contenu = [{
            nom: nomDuMelange,
            etat: 'pas cuit',
            prix: 0
        }];
    }
};


//retour à la maison et cuisine
personnage.seDeplacer(maison);
console.log(`${personnage.nom} est de retour à la maison.`);

//mettre tout dans le bol
personnage.mainDroite[0].contenu.forEach(ingredient => {
    bol.contenu.push(ingredient);
    console.log(`${ingredient.nom} a été ajouté dans le bol.`);
});
personnage.mainDroite[0].contenu = [];//vider pannier
console.log("Le panier est vide!");




