var tempC = prompt("saisir votre température en degré celsius");

var resultF = tempC * (9 / 5) + 32;
document.write(resultF);

var tempF = prompt("saisir votre température en degré Farhenheit");

var resultC = (tempF-32)*(5/9);
document.write(resultC);

document.write("<h4>"+ tempF +"F="+ tempC+ "celcius</h4");