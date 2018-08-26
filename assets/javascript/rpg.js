$(document).ready(function() {



    
    var mario ={
        health: 100,
        attack: 10,
        counter: 20,
    }

    var luigi ={
        health: 150,
        attack: 30,
        counter: 5,
    }

    var wario ={
        health: 175,
        attack: 15,
        counter: 15,
    }

    var waluigi ={
        health: 130,
        attack: 5,
        counter: 30,
    }



    // console.log(obiwan.health);
 var playerone;
 var playertwo;
 var firstChoice = true;
 var secondChoice = true;


// ~~~~~ KEY FUNCTIONS ~~~~~~~
 //=========================================


 function heroSelect(){
    for(let i = 0; i < 5; i++){
      if ($("#char" + i).hasClass("hero")){

     }
     else{
         $("#char"+ i).addClass("enemy")
     }  
    } 

    if ($("#char1").hasClass("hero")){
        playerone = mario;
    }
        else if ($("#char2").hasClass("hero")){
            playerone = luigi;
        }

        else if ($("#char3").hasClass("hero")){
            playerone = wario;
        }

        else if ($("#char4").hasClass("hero")){
            playerone = waluigi;
        }
 }

 function defenderSelect(){
    if ($("#char1").hasClass("defender")){
        playertwo = mario;
    }
        else if ($("#char2").hasClass("defender")){
            playertwo = luigi;
        }

        else if ($("#char3").hasClass("defender")){
            playertwo = wario;
        }

        else if ($("#char4").hasClass("defender")){
            playertwo = waluigi;
        }
 }

 function removeDefender(){
    for(let i = 0; i < 5; i++){
        if ($("#char" + i).hasClass("defender")){
            $("#char" + i).removeClass("defender")
            $("#char"+ i).addClass("enemy")
       }
       else{
           
       }  
      }
 }

 function attack(){
     playertwo.health -= playerone.attack;
     playerone.health -= playertwo.counter;
     playerone.attack += playerone.attack;
     
     if (playerone.health <= 0){
        alert("YOU SUCK STUPID")
     }

     if (playertwo.health <=0){
         alert("YOU WON")
         secondChoice = true;
         removeDefender();
     }
     
 }


//  function defenderSelect(){
//      $(this).addClass("defender");
//  }

$(".btn").on("click", function(){
 if (firstChoice === true){
    firstChoice = false;
    $(this).addClass("hero");
    heroSelect();
    console.log(playerone);
 }
    else if (secondChoice === true){
        secondChoice = false;
        $(this).addClass("defender");
        defenderSelect();
        console.log(playertwo);
    }

if($(this).is("#attack")){
    attack();
    console.log("P1 Health: " + playerone.health, "P2 Health: " + playertwo.health);
}


    
});










// function appear(x){
//     if ($(x).hasClass("invisible")){
//       $(x).removeClass("invisible");
//         $(x).addClass("visible");  
//     }
    
// }

// function disappear(x){
//     if ($(x).hasClass("visible")){
//       $(x).addClass("invisible");
//         $(x).removeClass("visible");  
//     }
// }

// $(".btn").on("click", function(){
//     if($(this).is("#hero1")){
//         appear(".enemy");
//         disappear(".hero");
//         disappear("#enemy1");
//         appear("#hero1");
//     }
//     else if($(this).is("#hero2")){
//         appear(".enemy");
//         disappear(".hero");
//         disappear("#enemy2");
//         appear("#hero2");
//     }
//     else if($(this).is("#hero3")){
//         appear(".enemy");
//         disappear(".hero");
//         disappear("#enemy3");
//         appear("#hero3");
//     }
//     else if($(this).is("#hero4")){
//         appear(".enemy");
//         disappear(".hero");
//         disappear("#enemy4");
//         appear("#hero4");
//     }
//     else if($(this).is("#enemy1")){
//         appear(".enemy")
//         disappear("#enemy1");
//         disappear(".defender");
//         appear("#defender1");
//     }
//     else if($(this).is("#enemy2")){
//         disappear("#enemy2");
//         disappear(".defender");
//         appear("#defender2");
//     }
//     else if($(this).is("#enemy3")){
//         disappear("#enemy3");
//         disappear(".defender");
//         appear("#defender3");
//     }
//     else if($(this).is("#enemy4")){
//         disappear("#enemy4");
//         disappear(".defender");
//         appear("#defender4");
//     }
// });

});