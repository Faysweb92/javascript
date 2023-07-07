

let but0 = document.getElementById("but1")
let but1 = document.getElementById("but2")
let but2 = document.getElementById("but3")
let propose = document.getElementById("proposition")
let essaie = document.getElementById("n_essaie")
let message = document.getElementById("message")
let reponse = document.getElementById("reponse")

var nbr_essai = 0
var nbr_aleatoire = generateRandomNumer();
// cette fonction sert a generer un nombre aleatoire
function generateRandomNumer() {
    // créer une variable qu'on va nommer nombre1 qui va contenir donc un nombre aléatoire entre zéro et un
    var nbr1 = Math.random();
    // on multiplie le nombre1 par 51
    var nbr2 = nbr1 * 51;
    // on converti nbr2 en nbr entier
    var nbr3 = Math.floor(nbr2)
    return nbr3;
    // return Math.floor(Math.random() * 51);
}

but1.addEventListener("click", (e) => {
    e.preventDefault();
    reponse.value = "le nombre mystere est: " + nbr_aleatoire;
})

but0.addEventListener("click", (e) => {
    e.preventDefault();
    nbr_aleatoire = generateRandomNumer();
    nbr_essai = 0;
})

but2.addEventListener("click", (e) => {
    e.preventDefault();

    if (nbr_essai < 7) {
        nbr_essai++
        essaie.value = nbr_essai;
        if (nbr_aleatoire < propose.value) {
            message.value = "c'est superieur"
        }
        else if (nbr_aleatoire > propose.value) {
            message.value = "c'est inferieur"
        }
        else {
            message.value = "félicitation"
        }
    }
    
})

let newGame = $("#but1");
let solution = $("#but2");
let propose = $("#but3");
let nbEssai = 0;
let randomNumer = Math.floor(Math.random() * 51);
 

newgame.on('click', () => {
    $("#message").val("le nbr mystere est :" + randomNumber);
});

solution.on('click', () => {
    
});
// le bouton propose avec une autre syntaxe
propose.click(() => {
    
});

   




// var pif = Math.floor(Math.random() * 50);
// console.log(pif);

// let propose = document.getElementById("proposition").value;
// if (propose == 5) {
//     console.log(propose);
// }

// let pif = Math.floor(Math.random() * 50);
// console.log(pif);
//     // alert(propose);
// document.getElementById("proposition").addEventListener('click', function () {
   
//     let propose = this.value;
    
//     for (var i = 0; i < 7; i++){
        
//     if (propose > pif) {
//         console.log("la valeur proposer est superieur");
//         }
//     else if (propose < pif) {
//         console.log("la valeur proposer est inférieur");
//     }
        
//     else{
//         console.log("la valeur proposer est égale");
//         }
    
// }
// });

