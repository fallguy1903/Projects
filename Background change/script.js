var index=0;
function colour()
{
    var col=["red","blue","Green","yellow"];
    document.getElementsByTagName("body")[0].style.background = col[index];
    index++;
    if(index>col.length-1)
    index=0;
} 