// function maxMin(a, b, c) {
//     if (c == true) {
//         if (a > b) {
//             return a;
//         }

//         else {
//             return b
//         }
      
//     }
// if (c == false) {
//         if (a < b) {
//             return a;
//         }

//         else {
//             return b
//         }
      
//     }
// }

function sommeTab(tableau) {
    let somme = 0;
    
    for (let i = 0; i < tableau.lenght; i++){
        somme = somme + tableau[i];
    }
        
    return somme;
 
}
var resultsomme=
    sommeTab([1, 5, 9])

function maxTab(tableau) { 
 

)

}

mawTab([2, 7, 4, 0])



function minTab(tableau) {
    let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
    for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
        // comparer max de la valeur a la position i du tableau
        if (min > tableau[i]) {  // si max est plus petit
            // on remplace la valeur de max par la valeur de la position i du tableau
            min = tableau[i]; 
        }
    }
    return min; // retourner max
}

 

let tab1 = [5, 8, 3, 0];
let resultat3 = minTab(tab1);
console.log(resultat3); // affiche => 0


function reverseWord(str) {

    let convertionChaine = str.split(''); // dans la variable convertionChaine on a un tableau
    convertionChaine.reverse(); // inverser le tableau
    convertionChaine.join(''); // convertir le tableau convertionChaine en chaine de caracter
    return convertionChaine;
  
}

var note = 5
var message = (note >= 15) ? "bien !" : "mauvais!";
console.log(message)

class cercle()

    



