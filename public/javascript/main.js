let personnage = {
    nom: "Ahmed",
    lieu: "maison",
    argent: 50,
    mainDroite: [], // rableau vide pour le panier
    mainGauche: [], //sert à rien pour l'instant 
    seDeplacer(lieu) {
        this.lieu = lieu.nom; // pour le changement de lieu du personnage
        console.log(`${this.nom} se déplace vers ${lieu.nom}.`);
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
console.log(`Début : ${personnage.nom} est à la ${personnage.lieu}.`);
personnage.seDeplacer(epicerie);
console.log(`${personnage.nom} est maintenant à la ${personnage.lieu}.`);

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
        console.log(`Il n'y a plus de panier disponible à l'épicerie.`);
    }
};

personnage.seDeplacer(epicerie);
personnage.prendrePanier();
console.log(`${personnage.nom} a dans sa main droite :`, personnage.mainDroite);




