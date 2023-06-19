// alert('test');

var heure = prompt("Entrez l'heure :");
var minute = prompt("Entrez les minutes :");
var seconde = prompt("Entrez les secondes :");

// on teste les cas d'erreur
if ((heure <= 23) && (minute <= 59) && (seconde <=59)) { // &&
    seconde++; // on incrémente les secondes
    if (seconde === 60) { // ===
        // on met les secondes à 0 et passe à la minute suivante
        seconde = 0;
        minute++;
        if (minute === 60) { // ===
            // on met les minutes à 0 et passe à l'heure suivante
            minute = 0;
            heure++;
            if (heure === 24) { // ===
                // l'heure suivante est minuit
                heure = 0;
            }
        }
    }
    // affichage de l'heure
    document.write("<h3>Dans une seconde il sera " + heure + " h " + minute + " m " + seconde + " s</h3>");
} else {
    // heure incorrecte
    document.write("Heure incorrecte !");

}










// var heure = prompt("entrez une heure");
// var minute = prompt("entrez une minute");
// var seconde = prompt("entrez une seconde");

// if ((heure <= 23) && (minute <= 59) && (seconde <= 59)) {
//     seconde++;
    
// }



// else {
    
//     document.write("Heure incorrecte !");

// }

    
    



















































