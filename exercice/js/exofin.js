//var prenom = prompt();


//var nb1 = prompt();


//function Affichageprénom(prénomDev) {

//for (var i =; i < prenomDev.length;i++)
    
    //prénomDev//

function additionDesChiffres(paramNum, paramString, paramArray) {
    
    for (var i = 0; i <= paramNum; i++) {
        paramArray.push(i);
}
    var resultat = [paramString, paramArray];
    return resultat;
}

//var chaineCaractere = additionDesChiffres(15, "le resutat de notre fonction:", []);//

var num = 15;
var chaineCaractere = "le resutat de notre fonction:";
var tab = [];
var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);
document.write(valeurRetour);








