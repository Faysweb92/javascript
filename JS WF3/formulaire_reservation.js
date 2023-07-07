let insc_1 = document.getElementById("input_case");
let choix_1 = document.getElementById("Plat");
let choix_2 = document.getElementById("dessert");
let total_ht = document.getElementById("Total_ht");
let total_ttc = document.getElementById("Total_ttc");
let valid = document.getElementById("valid");


valid.addEventListener("click", (e) => {
    e.preventDefault();
    reponse.value = "le nombre mystere est: " + nbr_aleatoire;
})



choix_1.addEventListener('change', function() {
    
    var ttc = Math.round(this.value * 1.20*100)/100;
    total_ht.value = this.value;
    // console.log(total_ttc.value);
    total_ttc.value = ttc;
    // console.log(total_ttc.value);
});