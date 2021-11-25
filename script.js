let acessButton = document.querySelector("#criar-tarefa")
acessButton.addEventListener("click", function(event){
    let input = document.querySelector("#texto-tarefa")
    let list = document.getElementById("lista-tarefas")
    let itemList = document.createElement("li")
    itemList.innerText=input.value
    itemList.addEventListener("click",function(event){
       let selectedItensList = document.querySelectorAll(".color-gray")
       console.log(selectedItensList)
       if(selectedItensList.length >= 1){
         selectedItensList[0].classList.remove("color-gray")
       }
        itemList.classList.add('color-gray')
    });
    list.appendChild(itemList)
    input.value = ""

 });

