
let toDoUl = document.querySelector(".todocontainer");

let textBox = document.querySelector(".createinput");

createbtn.addEventListener("click",createToDo);

function createToDo(){

    let toDoDiv = document.createElement("div");
    toDoDiv.className = "todowrapper";

    let createToDoLi = document.createElement("li");
    createToDoLi.className ="todotext";
    createToDoLi.innerText = textBox.value;

    let createCheckBtn = document.createElement("button");
    createCheckBtn.className ="check";
    createCheckBtn.innerHTML ='<i class="fas fa-check"></i>';

    let createTrashBtn = document.createElement('button');
    createTrashBtn.className ="trash";
    createTrashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    toDoUl.appendChild(toDoDiv);
    toDoDiv.appendChild(createToDoLi);
    toDoDiv.appendChild(createCheckBtn);
    toDoDiv.appendChild(createTrashBtn);

    textBox.value ="";
};