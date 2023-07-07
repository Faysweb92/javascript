// pour recuperer le bouton
// let btn = document.getElementById("add_todo"); 
// // pour recuperer le input
// let todo = document.getElementById('todo'); 
// // pour recuperer la div ou on va ajouter les todos
// let todoList = document.getElementById("todolist"); 

// // ecouter le click sur le bouton
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // recuperer la valeur du input
//     let val = todo.value;
//     // creer un paragraphe
//     let p = document.createElement("p");
//     // ajouter le contenu du input dans le paragraphe
//     p.textContent = val;
//     // ajouter le paragraphe dans la div
//     todoList.appendChild(p);
    
//     p.addEventListener('click', () => {
//         p.style.color = "red";
        
//     })

// // // p.addEventListener('mouseover', () => {
// // //     p.style.backgroundColor = "red";
// // // })

// });

let btn = $("#add_todo");
let todo = $("#todo");
let todoList = $("#todolist");

btn.$("click").on(function (e) {
    e.preventDefault();
    // let val = todo.value; .val()
    let val = todo.val();
let p = $.create("p");
    p.text = val;
    todolist.append(p);
p.$("click").on(function (e){

        // p.style.color = "red";
     $("p").css("color", "red");
        
    })
})

// code chatgpt

// let btn = $('#add_todo');
// let todo = $('#todo');
// let todoList = $('#todolist');

// btn.on('click', (e) => {
//     e.preventDefault();
//     let val = todo.val();
//     let p = $('<p></p>');
//     p.text(val);
//     todoList.append(p);
//     p.on('click', () => {
//         p.css('color', 'red');
    
//     });
// });







// let calcules = document.getElementById("plus,moin,multip,diviser"); 
// let nombres = document.getElementById("entree_1", "entree_2");
// let reponses = document.getElementById("reponse"); 

// calcules.addEventListener('click', () => {
//     let val = nombres.value;
// })
