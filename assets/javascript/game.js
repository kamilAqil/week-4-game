
// the game toggles between two screens the
// select screen and the fight screen


var game = {
  "characters": {
    "squirtle": {
      "name": "squirtle",
      "imageSource":"./assets/images/Squirtle.png",
      "health": 100,
      "attack": 10,
      "counterAttack": 5
    },
    "charmander":{
      "name": "charmander",
      "imageSource":"./assets/images/Charmander.png",
      "health": 100,
      "attack": 10,
      "counterAttack": 5
    },
    "bulbasaur":{
      "name": "bulbasaur",
      "imageSource":"./assets/images/bulbasaur.png",
      "health": 100,
      "attack": 10,
      "counterAttack": 5
    },
    "pikachu":{
      "name": "pikachu",
      "imageSource":"./assets/images/pikachu.png",
      "health": 100,
      "attack": 10,
      "counterAttack": 5
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
    this.className = "invisible";
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
});

// pass this function the name of the character(string)
// to update the health bar for the corresponding character
function setHealth(character,value){
  $('#'+character+'HealthBar').html(value+"%");
  $('#'+character+'HealthBar').css("width",value);
}



// setFightScreen
function setFightScreen(){
  $('#playerCharacterPic').attr("src",game.userSelection.imageSource);
  $('#selectedEnemyPic').attr("src",game.userEnemySelection.imageSource);
  $('#characterNametag').html(game.userSelection.name);
  $('#enemyNametag').html(game.userEnemySelection.name);

}
