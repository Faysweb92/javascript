function maxMin(a, b, c) {
    if (c == true) {
        if (a > b) {
            return a;
        }

        else {
            return b
        }
      
    }
if (c == false) {
        if (a < b) {
            return a;
        }

        else {
            return b
        }
      
    }
}

function sommeTab(tableau) {
    let somme = 0;
    
    for (let i = 0; i < tableau.lenght; i++){
        somme = somme + tableau[i];
    }
        
    return somme;
 
}
var resultsomme=
sommeTab([1,5,9])

