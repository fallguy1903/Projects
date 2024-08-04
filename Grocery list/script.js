const grocery = document.getElementsByClassName("grocery")[0];
const pencil = document.getElementById("pencil");
const allItem = document.getElementById("allItems");
const userInput = document.getElementById("itemInput");

pencil.addEventListener("click",function(){allItem.innerHTML="";})
userInput.addEventListener("keydown",function(event)
{
    if(event.key === 'Enter')
    additem();
})
function additem()
{
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click",function(){
        h2.style.textDecoration="line-through";
    })  
    allItem.appendChild(h2);

    userInput.value=" ";
}