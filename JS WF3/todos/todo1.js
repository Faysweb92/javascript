// pour recuperer le bouton
let btn = document.getElementById("add_todo"); 
// pour recuperer le input
let todo = document.getElementById('todo'); 
// pour recuperer la div ou on va ajouter les todos
let todoList = document.getElementById("todolist"); 

// ecouter le click sur le bouton
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // recuperer la valeur du input
    let val = todo.value;
    // creer un paragraphe
    let p = document.createElement("p");
    // ajouter le contenu du input dans le paragraphe
    p.textContent = val;
    // ajouter le paragraphe dans la div
    todoList.appendChild(p);
    // ecouter le 
    p.addEventListener('click', () => {
        p.style.color = "red";
        p.style.fontSize = "2em";
        // if (p.style.color == "red") {
        //     p.style.color = "blue";
        // } else {
        //     p.style.color = "red";
        // }
    });
});

// Correction: jquiery de todo

let btn = $("#add_todo");
let todo = $("#todo");
let todoList = $("#todolist");

btn.on("click", function (e) {
    e.preventDefault();
    // let val = todo.value; .val()
    let val = todo.val();
    // let p = $.create("p");
    // p.text(val) ;
    todoList.append('<p>'+val+'</p>').on("click", function (e){

        // p.style.color = "red";
    //  $("p").css("color", "red");
        e.target.style.color = "red";
        
    })
})






let btn = $("add.todo");
let todo = $("todo");
let todoList = $("todolist");

btn.$("click").on(function (e) {
    e.preventDefault();
    let val = todo.value;
    let p = $.create("p");
    p.text=val
    $.append(p);

    p.$('click', () => {
        p.style.color = "red";
        p.style.fontSize = "2em";
    })
})

code de chatjpt