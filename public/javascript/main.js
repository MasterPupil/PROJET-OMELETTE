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
        if (ingredient.etat === "entier" && outil.action === "couper") {
            ingredient.etat = "coupé";
            console.log(`${ingredient.nom} a été coupé avec ${outil.nom}.`);
        } else {
            console.log(`Impossible de couper ${ingredient.nom}.`);
        }
    }
    
};
let poele = {
    nom: "Poêle",
    contenu: [],
    cuire() {
        console.log("La cuisson commence...");
        setTimeout(() => {
            if (this.contenu.length > 0) {
                this.contenu[0].etat = "cuit"; 
                console.log("Notre omelette est cuite :)");
            } else {
                console.log("La poêle est vide, rien à cuire.");
            }
        }, 4000); //4 secondes
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

// Retour à l'épicerie pour rendre le panier
personnage.seDeplacer(epicerie);
console.log(`${personnage.nom} retourne à l'épicerie pour rendre le panier.`);

epicerie.paniers.push(personnage.mainDroite[0]); //rendre le panier dans l'épicerie
personnage.mainDroite.pop(); //retirer le panier de la mainDroite
console.log(`${personnage.nom} a rendu le panier à l'épicerie.`);

//retour maison
personnage.seDeplacer(maison);
console.log(`${personnage.nom} retourne à la maison.`);


//definir le couteau
let couteau = {
    nom: "Couteau",
    action: "couper"
};
//methode couper ameilorer
personnage.couper = function (ingredient, outil) {
    if (ingredient.etat === "entier" && outil.action === "couper") {
        ingredient.etat = "coupé";
        console.log(`${ingredient.nom} a été coupé avec ${outil.nom}.`);
    } else {
        console.log(`Impossible de couper ${ingredient.nom}.`);
    }
};

//preparer les aliments dans le bol
bol.contenu.forEach((ingredient) => {
    if (ingredient.etat === "entier") {
        personnage.couper(ingredient, couteau);
        console.log(`${ingredient.nom} a été coupé.`);
    }
});

//melanger les alimentsdans le bol
bol.melanger("omelette");
console.log("Les ingrédients ont été mélangés pour former une omelette.");
console.log("Contenu du bol :", bol.contenu);


//transférer dans la poele 
poele.contenu.push(bol.contenu[0]); 
bol.contenu = []; //vider le bol
console.log("Le mélange est maintenant dans la poêle.");
console.log("Contenu de la poêle :", poele.contenu);

//lancement de la cuisson
poele.cuire();



