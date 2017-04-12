
var userSelection="";
var enemySelection="";
var characters = ['squirtle','charmander','bulbasaur','pikachu'];

  // when a character is clicked, if userSelection is not set
  // we will assign the value based on which character was clicked
  // if userSelection is assigned we will assign enemySelection
  $('.character').on('click',function(){
    if(userSelection !== "" && enemySelection !== ""){
      console.log("all set");
    }
    else if(userSelection==""){
      var name = $(this).attr("id");
      // console.log(name);
      userSelection = name;
      console.log("your selection: "+userSelection);
    }
    else if(userSelection !== ""){
      var name = $(this).attr("id");
      // console.log(name);
      enemySelection = name;
      console.log("enemy selection: "+enemySelection);
    }
  });
