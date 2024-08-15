class Telephone {
    // Propriétés
    boite = true;
    etat; // "neuf" ou "occasion"

    // Constructeur pour initialiser les propriétés spécifiques
    constructor(marque, couleur, dimension, price, etat) {
        this.marque = marque;
        this.couleur = couleur;
        this.dimension = dimension;
        this.price = price;
        this.etat = etat;
    }

    // Méthode d'instance pour afficher les propriétés
    fiche() {
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
}

// Création de deux instances de téléphone
let telephone1 = new Telephone("Apple", "Argent", "6.1 pouces", 999, "occasion");
let telephone2 = new Telephone("Samsung", "Phantom Black", "6.5 pouces", 799, "neuf");

// Appelation de la méthode fiche() pour chaque instance
console.log("Téléphone 1:");
telephone1.fiche();
console.log("\nTéléphone 2:");
telephone2.fiche();
