
let toDoUl = document.querySelector(".todocontainer");
let textBox = document.querySelector(".createinput");
let trashBtn = document.getElementById("trashbtn");
let listDiv = document.querySelector(".todowrapper");

createbtn.addEventListener("click",createToDo);
toDoUl.addEventListener("click",deleteItem);

function createToDo(event){

    let toDoDiv = document.createElement("div");
    toDoDiv.className = "todowrapper";
    toDoDiv.id ="todowrapper";

    let createToDoLi = document.createElement("li");
    createToDoLi.className ="todotext";
    createToDoLi.innerText = textBox.value;

    let createCheckBtn = document.createElement("button");
    createCheckBtn.className ="check";
    createCheckBtn.innerHTML ='<i class="fas fa-check"></i>';

    let createTrashBtn = document.createElement('button');
    createTrashBtn.className ="trash";
    createTrashBtn.id="trashBtn";
    createTrashBtn.innerHTML = '<i class="fas fa-trash"></i>';

    toDoUl.appendChild(toDoDiv);
    toDoDiv.appendChild(createToDoLi);
    toDoDiv.appendChild(createCheckBtn);
    toDoDiv.appendChild(createTrashBtn);

    textBox.value ="";
};

function deleteItem(e){
    const item = e.target;
    if(item.className==='trash'){
        const todo = item.parentElement;
        todo.remove();
    };
    if(item.className==='check'){
        const todo = item.parentElement;
        const toDoText = document.querySelector(".todotext");
        todo.className="completed";
    };
};

