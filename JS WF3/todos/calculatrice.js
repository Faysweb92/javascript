var plus = document.getElementById("plus");
var moins = document.getElementById("moins"); 
var multip = document.getElementById("multip");
var diviser = document.getElementById("diviser");
var egal = document.getElementById("egal");
// var reponse = document.getElementById("reponse");
var nombre_1 = 0;
var nombre_2 = 0;
var operateur = "+";
// var resultat = 0;
plus.addEventListener("click", () => {
    operateur = "+";
});

moins.addEventListener("click", () => {
    operateur = "-";
});

multip.addEventListener("click", () => {
    operateur = "*";
});

diviser.addEventListener("click", () => {
    operateur = "/";
});

egal.addEventListener("click", () => {
    nombre_1 = document.getElementById("entree_1").value;
    nombre_2 = document.getElementById("entree_2").value;
    if (operateur == "+") {
        resultat = Number(nombre_1) + Number(nombre_2);
        reponse.value = resultat;
    }
    if (operateur == "-") {
        resultat = Number(nombre_1) - Number(nombre_2);
        reponse.value = resultat;
    }
    if (operateur == "*") {
        resultat = Number(nombre_1) * Number(nombre_2);
        reponse.value = resultat;
    }
    if (operateur == "/") {
        resultat = Number(nombre_1) / Number(nombre_2);
        reponse.value = resultat;
    }
});