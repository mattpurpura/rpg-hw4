$(document).ready(function() {

    var obiwan ={
        health: 100,
        attack: 100,
        counter: 100,
    }

    var luke ={
        health: 100,
        attack: 100,
        counter: 100,
    }

    var vader ={
        health: 100,
        attack: 100,
        counter: 100,
    }

    var kylo ={
        health: 100,
        attack: 100,
        counter: 100,
    }

    // console.log(obiwan.health);

function appear(x){
    $(x).removeClass("invisible");
        $(x).addClass("visible");
}

function disappear(x){
    $(x).addClass("invisible");
        $(x).removeClass("visible");
}

$(".btn").on("click", function(){
    if($(this).is("#hero1")){
        appear(".enemy");
        disappear(".hero");
        disappear("#enemy1");
        appear("#hero1");
    }
    else if($(this).is("#hero2")){
        appear(".enemy");
        disappear(".hero");
        disappear("#enemy2");
        appear("#hero2");
    }
    else if($(this).is("#hero3")){
        appear(".enemy");
        disappear(".hero");
        disappear("#enemy3");
        appear("#hero3");
    }
    else if($(this).is("#hero4")){
        appear(".enemy");
        disappear(".hero");
        disappear("#enemy4");
        appear("#hero4");
    }
    else if($(this).is("#enemy1")){
        disappear("#enemy1");
        disappear(".defender");
        appear("#defender1");
    }
    else if($(this).is("#enemy2")){
        disappear("#enemy1");
        disappear(".defender");
        appear("#defender2");
    }
    else if ($(this).hasClass("#enemy2")){
        disappear(".enemy2");
        appear(".defender2"); 
    }
    else if ($(this).hasClass("#enemy1")){
        disappear(".enemy1");
        appear(".defender1"); 
    }
});




























});