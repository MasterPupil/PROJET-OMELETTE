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
    personnes: [] // Personnes dans la maison
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





