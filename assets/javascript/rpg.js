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
    if ($(x).hasClass("invisible")){
      $(x).removeClass("invisible");
        $(x).addClass("visible");  
    }
    
}

function disappear(x){
    if ($(x).hasClass("visible")){
      $(x).addClass("invisible");
        $(x).removeClass("visible");  
    }
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
        appear(".enemy")
        disappear("#enemy1");
        disappear(".defender");
        appear("#defender1");
    }
    else if($(this).is("#enemy2")){
        disappear("#enemy2");
        disappear(".defender");
        appear("#defender2");
    }
    else if($(this).is("#enemy3")){
        disappear("#enemy3");
        disappear(".defender");
        appear("#defender3");
    }
    else if($(this).is("#enemy4")){
        disappear("#enemy4");
        disappear(".defender");
        appear("#defender4");
    }
});




























});