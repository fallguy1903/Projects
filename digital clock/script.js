window.addEventListener('load',calltime);
function calltime()
{
    var date=new Date();
    var daynumber= date.getDay();
    var hour= date.getHours();
    var minutes = date.getMinutes();
    var ampm = hour > 12 ? 'AM':'PM';
    var daynames =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    hour = hour%12;
    hour = hour ? hour : '12';
    hour = hour<10 ? '0'+hour:hour;
    minutes = minutes<10 ? '0' + minutes : minutes;

    document.getElementById("day").innerHTML = daynames[daynumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calltime,200);
}