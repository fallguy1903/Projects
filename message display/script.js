var message = document.getElementById("message-input");

message.addEventListener("keydown",(event)=>{
    if(event.key=='Enter')
    getMessage();
})
function getMessage()
{
    document.getElementById("message-output").innerHTML = message.value;
    message.value = "";
}