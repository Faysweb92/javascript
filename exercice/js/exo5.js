var age = prompt("indiquez votre âge");
console.log(age);
while ((age <= 3) || age >= 120 || isNaN(age)) {
    age = prompt("indiquez votre age: ");

}
var majoriteFR = 18;
function affichage(agePersonne, ageAdulte) {
    
    if (agePersonne < ageAdulte) {
        alert("Vous n'êtes pas majeur !")
    }
}