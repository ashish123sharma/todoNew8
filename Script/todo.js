var todoItems = JSON.parse(localStorage.getItem("completeIndex")); 

var completeTodo = JSON.parse(localStorage.getItem("completeTodo")) || []

todoItems.map(function(elem){

    var tr = document.createElement("tr");


    var td1 = document.createElement("td");
    td1.textContent=elem.itemName;
    var td2 = document.createElement("td");
    td2.textContent=elem.itemQuant;
    var td3 = document.createElement("td");
    td3.textContent=elem.itemPri;
    var td4 = document.createElement("td");
    td4.textContent="Remove"
    td4.addEventListener("click", deleteItem)
        var btn = document.createElement("button");
             btn.textContent="Mark Complete"
             btn.style.color="blue";
             
        btn.addEventListener("click",function(){
         markfunction(elem);
        
        });
       
        tr.append(td1,td2,td3,btn,td4);
        document.querySelector("tbody").append(tr);

     
        function markfunction(elem){
            // console.log(elem) getting console for marked function 
          completeTodo.push(elem);
          localStorage.setItem("completed",JSON.stringify(completeTodo))
        }
})
function deleteItem(event){
event.target.parentNode.remove();



}


