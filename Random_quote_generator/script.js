function generator()
{
    var quotes={
        "― C. JoyBell C.":'“Insane means fewer cameras!”',
        "― Dan Howell":'“Im about as intimidating as a butterfly.”',
        "― Christopher Paolini, Eldest":'“Never ask an elf for help; they might decide your better off dead, eh?”',
        "― Dan Brown":'“Act first, explain later.”'
    }
    var authors=Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}