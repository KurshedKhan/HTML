let todoValue = document.getElementById("todoText");
let listItem = document.getElementById("list-items");
let AddUpdateClick = document.getElementById("AddUpdateClick");
let updateText;


todoValue.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        AddUpdateClick.click();
    }
});


function CreateToDoData(){
    // alert(todoValue.value);
    if(todoValue.value === ""){
        alert("Enter your value in todo list :");
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div ondblclick="CompleteTodoItem(this)">${todoValue.value}</div><div><img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="pencil-removebg-preview.png" alt="pencil images"><img class="delete todo-controls" src="delete.png" alt="delete images"></div>`;
    li.innerHTML = todoItems;
    listItem.appendChild(li);
    todoValue.value = "";
}

function CompleteTodoItem(e){
    console.log(e.parentElement);
    if(e.parentElement.querySelector("div").style.textDecoration === ""){
        e.parentElement.querySelector("div").style.textDecoration = "line-through";
    }
}


function UpdateOnSelectionItems(){
    updateText.innerText = todoValue.value;
    AddUpdateClick.setAttribute("onclick","CompleteTodoItem()");
    AddUpdateClick.setAttribute("src","plus-icon-png-image.png");
    todoValue.value = "";
}
function UpdateToDoItems(e){
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration === ""){
        todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
        AddUpdateClick.setAttribute("onclick","UpdateOnSelectionItems()");
        AddUpdateClick.setAttribute("src","images-removebg-preview.png");
        updateText = e.parentElement.parentElement.querySelector("div");
    }
}
