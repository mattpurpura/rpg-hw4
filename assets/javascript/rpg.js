$(document).ready(function() {

var players;

function initialSetup(){
  players = [
     
    {   name: "Mario",
        health: 100,
        attack: 10,
        increment: 10,
        counter: 20,
    },  
    {
        name: "Luigi",
        health: 150,
        attack: 5,
        increment: 5,
        counter: 5,
    },
    {
        name: "Princess Peach",
        health: 150,
        attack: 8,
        increment: 8,
        counter: 5,
        
    },
    {
        name: "Bowser",
        health: 150,
        attack: 3,
        increment: 3,
        counter: 5,
        
    }
 ];
}
initialSetup();

    // console.log(obiwan.health);
 var playerone = players[0];
 var playertwo = players[1];
 var firstChoice = true;
 var secondChoice = true;


// ~~~~~ KEY FUNCTIONS ~~~~~~~
 //=========================================


 function heroSelect(){
    for(let i = 0; i < 4; i++){
      if ($("#char" + i).hasClass("hero")){
        playerone = players[i];
        $("#player-one").prepend($(".hero"));
     }
     else{
         $("#char"+ i).addClass("enemy");
         $("#enemy-select").prepend($(".enemy"))
     }  
    } 
 }

 function defenderSelect(){
    for(let i = 0; i < 4; i++){
        if ($("#char" + i).hasClass("defender") && players[i].health > 0){
          playertwo = players[i];
          $("#defender-row").prepend($(".defender"));
       }
            else if ($("#char" + i).hasClass("defender")){
                $("#char" + i).removeClass("defender");
                secondChoice = true;
                alert("That player has no more health");
            }
      } 
 }

 function removeDefender(){
    for(let i = 0; i < 4; i++){
        if ($("#char" + i).hasClass("defender")){
            $("#char" + i).removeClass("defender")
            $("#char"+ i).addClass("enemy defeated")
            $("#enemy-select").append($(".enemy"))
       } 
      }
 }

 function attack(){
     $("#attack-message").html(playerone.name + " attacked " + playertwo.name + " for " + playerone.attack);
     $("#counter-message").html(playertwo.name + " countered for " + playertwo.counter);
     playertwo.health -= playerone.attack;
     playerone.health -= playertwo.counter;
     playerone.attack += playerone.increment;
     $("#hero-health").html(playerone.health);

    if(playertwo.health > 0){
        $("#defender-health").html(playertwo.health);
    }
        else{
            $("#defender-health").html("");
        }

     if (playerone.health <= 0){
        alert("YOU SUCK STUPID")
        reset();
     }

     if (playertwo.health <=0){
         alert("YOU WON")
         secondChoice = true;
         removeDefender();
     }
     
 }

function winLogic(){
    if ($("#char0").hasClass("hero") && players[1].health <= 0 && players[2].health <= 0 && players[3].health <= 0){
        alert("You won the game as " + playerone.name);
        reset();
    }
    else if ($("#char1").hasClass("hero") && players[0].health <= 0 && players[2].health <= 0 && players[3].health <= 0){
        alert("You won the game as " + playerone.name);
        reset();
    }
    else if ($("#char2").hasClass("hero") && players[0].health <= 0 && players[1].health <= 0 && players[3].health <= 0){
        alert("You won the game as " + playerone.name);
        reset();
    }
    else if ($("#char3").hasClass("hero") && players[0].health <= 0 && players[2].health <= 0 && players[1].health <= 0){
        alert("You won the game as " + playerone.name);
        reset();
    }
}

 function reset(){
    $("#defender-health").html("");
    $("#hero-health").html("");
    for(let i = 0; i < 4; i++){
        $("#char"+i).appendTo($("#hero-select"))
        if ($("#char" + i).hasClass("defender")){
            $("#char" + i).removeClass("defender")
        } 
            else if ($("#char" + i).hasClass("enemy")){
                $("#char" + i).removeClass("enemy")

                if ($("#char" + i).hasClass("defeated")){
                    $("#char" + i).removeClass("defeated")
                }
            }

            else if ($("#char" + i).hasClass("hero")){
                $("#char" + i).removeClass("hero")
            }
    }
    firstChoice = true;
    secondChoice = true;
      initialSetup();
      
    }


$(".btn").on("click", function(){
 if (firstChoice === true){
    firstChoice = false;
    $(this).addClass("hero");
    heroSelect();
    $("#hero-health").html(playerone.health);
    console.log(playerone);
 }
    else if (secondChoice === true){
        secondChoice = false;
        $(this).addClass("defender");
        defenderSelect();
        $("#defender-health").html(playertwo.health);
        console.log(playertwo);
    }

if($(this).is("#attack")){
    attack();
    console.log("P1 Health: " + playerone.health, "P2 Health: " + playertwo.health);
    winLogic();
}

if($(this).is("#reset")){
    reset();
}

}); //closes the onCLick function

}); //closes the document.ready function