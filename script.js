let acessButton = document.querySelector("#criar-tarefa")
acessButton.addEventListener("click", function(event){
    let input = document.querySelector("#texto-tarefa")
    let list = document.getElementById("lista-tarefas")
    let ItemList = document.createElement("li")
    ItemList.innerText=input.value
    list.appendChild(ItemList)
    input.value = ""
 });
