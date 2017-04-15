
// the game toggles between two screens the
// select screen and the fight screen


var game = {
  "characters": {
    "squirtle": {
      "name": "squirtle",
      "imageSource":"./assets/images/Squirtle.png",
      "health": 100,
      "attack": 3,
      "attackMultiplier": 3,
      "counterAttack": 5
    },
    "charmander":{
      "name": "charmander",
      "imageSource":"./assets/images/Charmander.png",
      "health": 100,
      "attack": 4,
      "attackMultiplier": 4,
      "counterAttack": 15
    },
    "bulbasaur":{
      "name": "bulbasaur",
      "imageSource":"./assets/images/bulbasaur.png",
      "health": 100,
      "attack": 2,
      "attackMultiplier": 2,
      "counterAttack": 25
    },
    "pikachu":{
      "name": "pikachu",
      "imageSource":"./assets/images/pikachu.png",
      "health": 100,
      "attack": 5,
      "attackMultiplier": 5,
      "counterAttack": 55
    },
  },
  "userSelection":undefined,
  // this is just an array of strings containing the names of enemies
  "enemies":[],
  "userEnemySelection":undefined,
};

$('.character').on('click',function(){
  var selectionName = this.id;
  // this will select the enemy to attack
  if(game.userSelection!==undefined){
    game.userEnemySelection = game.characters[selectionName];
    console.log("the enemy selected is "+game.userEnemySelection.name);
      // after the userEnemySelectin is set then we will display
      // the confirm button will display
      $('#confirmButton').css({"display":"flex"});
      $('#mainContentSelectHeader').html("Attack "+game.userEnemySelection.name);
  }

  // if the userSelection is undefined after the
  // character click event update the userSelection with
  // the character object
  if(game.userSelection==undefined){
    console.log(game.userSelection);
    game.userSelection = game.characters[selectionName];
    console.log("userSelection is "+game.userSelection.name);
    $('#mainContentSelectHeader').html("Select Enemy");
    this.className += " selectedCharacter";
    console.log(this);
    // going to add a border around the selected
    // character

    // for each character in game.characters if the character.name
    // is not == to game.userSelection.name push character to game.enemies
    // array
    for(character in game.characters){
      if(character !== game.userSelection.name){
        game.enemies.push(character);
      }
    }
    console.log(game.enemies);
  }
});

$('#confirmButton').on('click',function(){
  $('#selectRowContent').css({
    "display":"none"
  });
  $('#fightScreen').css({
    'display':'flex'
  });
  $('#confirmButton').css({
    'display':'none'
  });
  setFightScreen();
});

$('#runAwayButton').on('click',function(){

  game.userEnemySelection = undefined;

  $('#fightScreen').css({
    'display':'none'
  });

  $('#selectRowContent').css({
    "display":"flex"
  });

  $('#messages').html("");

  console.log(game.userEnemySelection);

});

$('#attackButton').on('click',function(){
  game.userEnemySelection.health -= game.userSelection.attack;
  $('#messages').append(game.userEnemySelection.name+" was attacked for : "+ game.userSelection.attack+"</br>");
  console.log(game.userEnemySelection.health);
  game.userSelection.health -= game.userEnemySelection.counterAttack;
  console.log(game.userSelection.health);
  $('#messages').append(game.userSelection.name+" was counter attacked for : "+ game.userEnemySelection.counterAttack+"</br>");
  game.userSelection.attack *= game.userSelection.attackMultiplier;
  updateHealth();

  if(game.userEnemySelection.health <= 0){
    winRound();
  }

});

// setFightScreen
function setFightScreen(){
  $('#playerCharacterPic').attr("src",game.userSelection.imageSource);
  $('#selectedEnemyPic').attr("src",game.userEnemySelection.imageSource);
  $('#characterNametag').html(game.userSelection.name);
  $('#enemyNametag').html(game.userEnemySelection.name);
  $('#enemyHealthBar').html(game.userEnemySelection.health+"%");
  $('#enemyHealthBar').css({'width':game.userEnemySelection.health+"%"});
}

function updateHealth(){

  $('#characterHealthBar').html(game.userSelection.health+"%");
  $('#characterHealthBar').css({
    'width':game.userSelection.health+"%"
  });

  $('#'+game.userSelection.name+'HealthBar').html(game.userSelection.health+"%");
  $('#'+game.userSelection.name+'HealthBar').css({
    'width':game.userSelection.health+"%"
  });

  $('#enemyHealthBar').html(game.userEnemySelection.health+"%");
  $('#enemyHealthBar').css({
    'width':game.userEnemySelection.health+"%"
  });


  var characterToUpdate = game.userEnemySelection.name;

  $('#'+characterToUpdate+'HealthBar').html(game.userEnemySelection.health+"%");

  $('#'+characterToUpdate+'HealthBar').css({
    'width':game.userEnemySelection.health+"%"
  });

}

function winRound(){
  $('#messages').html("YOU WIN!!");
  $('#'+game.userEnemySelection.name).addClass('invisible');
  game.userEnemySelection = undefined;

  $('#fightScreen').css({
    'display':'none'
  });

  $('#selectRowContent').css({
    "display":"flex"
  });

  $('#messages').html("");

}
