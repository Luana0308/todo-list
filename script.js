let acessButton = document.querySelector("#criar-tarefa")
acessButton.addEventListener("click", function(event){
    let input = document.querySelector("#texto-tarefa")
    let list = document.getElementById("lista-tarefas")
    let itemList = document.createElement("li")
    itemList.innerText=input.value
    list.appendChild(itemList)
    input.value = ""
    itemList.addEventListener("click",function(event){
        itemList.style.backgroundColor="rgb(128,128,128)"
    });
 });

