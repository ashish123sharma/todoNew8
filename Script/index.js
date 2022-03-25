document.querySelector("#form").addEventListener("submit",myFunction);
// var todoArr =[];   to add todoObj into empty arr which make bug when we refresh;
var todoArr = JSON.parse(localStorage.getItem("todoArr")) || [];  

function myFunction(event){

  event.preventDefault();

var name1 = document.querySelector("#name").value;
var quant = document.querySelector("#qty").value;
var pri= document.querySelector("#priority").value;
console.log(name1,quant,pri)
var todoObj ={

  itemName:name1,
  itemQuant : quant,
  itemPri :pri

};


todoArr.push(todoObj);
localStorage.setItem("completeIndex",JSON.stringify(todoArr));

}
