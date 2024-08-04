var disp = document.getElementById("disp");
var count =0;
function increment()
{
    count = count+1;
    disp.innerHTML = count; 
}
function decrement()
{
    count = count-1;
    disp.innerHTML = count; 
}