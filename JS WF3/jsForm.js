var bouton = document.getElementById("bouton"); // Sélection du bouton

 // ajout écouteur d'événement sur le bouton
 bouton.addEventListener('click', function (){
 var nom = document.getElementById('fname').value; // recup saisie de l'utilisateur
 // changer le texte du paragraphe par Bonjour et le nom que l’utilisateur aura donné
 document.getElementById("todosListe").textContent = "1"+nom;
 });
 
