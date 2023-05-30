var monCompte = 1000
var temps = 0
while (monCompte < 2000)
{ monCompte += 50; temps++; }

document.write("<h3> Sous sur mon compte:" + monCompte + "</h3>");
document.write("<h3> Jusqu'à 2000€, il me faut: " + temps + "mois</h3>");

var tps = 0;
for (var mesSous = 1000; mesSous < 2000; mesSous += 50) { document.write("<h3> Le mois suivant j'ai:" + mesSous + "</h3>"); tps++; }

document.write("<h3> il aura fallu" + tps + "mois.</h3>");