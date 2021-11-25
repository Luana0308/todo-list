let acessButton = document.querySelector("#criar-tarefa")
acessButton.addEventListener("click", function(event){
    let input = document.querySelector("#texto-tarefa")
    let list = document.getElementById("lista-tarefas")
    let itemList = document.createElement("li")
    itemList.innerText=input.value
    itemList.addEventListener("click",function(event){
       let selectedItensList = document.querySelectorAll(".color-gray")
       if(selectedItensList.length >= 1){
         selectedItensList[0].classList.remove("color-gray")
       }
        itemList.classList.add('color-gray')
    });
    itemList.addEventListener("dblclick", function(event){
        if(itemList.classList.contains("completed")){
            itemList.classList.remove("completed")
        }else {
            itemList.classList.add("completed")
        }     
    })
    list.appendChild(itemList)
    input.value = ""
 });

 let buttonClearList = document.getElementById("apaga-tudo")
 buttonClearList.addEventListener("click", function(){
    let list = document.getElementById("lista-tarefas")
    list.innerHTML=""
 })
 let buttonClearListCompleted = document.getElementById("remover-finalizados")
 buttonClearListCompleted.addEventListener("click", function(){
     console.log("imprime 3")
 })

