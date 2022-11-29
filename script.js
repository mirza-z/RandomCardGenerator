var card = document.getElementById("card");
var simbol1 = document.getElementById("simbol1");
var simbol2 = document.getElementById("simbol2");
var znak = document.getElementById("one");

function getRandomValue(){
    min = 1;
    max = 14;
    var value = Math.floor(Math.random() * (max - min) + min);
    if(value<11 && value!=1) return value;
    else if(value==1) return "A";
    else if(value==11) return "J";
    else if(value==12) return "D";
    else if(value==13) return "K";
}

function getRandomSign(){
    min = 1;
    max = 5;
    return Math.floor(Math.random() * (max - min) + min);
}

function getCard(){
    card.style.display = "flex";
    value = getRandomValue();
    sign = getRandomSign();
    switch(sign){
        case 1: znak.style.backgroundImage = 'url("club.png")';
                simbol1.style.color = "black";
                simbol2.style.color = "black";
                break;
        case 2: znak.style.backgroundImage = 'url("spade.png")';
                simbol1.style.color = "black";
                simbol2.style.color = "black";
                break;
        case 3: znak.style.backgroundImage = 'url("suit.png")';
                simbol1.style.color = "red";
                simbol2.style.color = "red";
                break;
        case 4: znak.style.backgroundImage = 'url("heart.png")';
                simbol1.style.color = "red";
                simbol2.style.color = "red";
                break;
    }
    simbol1.innerHTML = value;
    simbol2.innerHTML = value;
}


