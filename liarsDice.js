function liarsDice(){

var resetGameBoard = document.getElementById("liarsDiceBoard");
var bonesRoller = document.getElementById("bonesRoller");

if ($("#loser").hasClass("bigger")){

  resetGameBoard.innerHTML = '<div id="liar1" class="col-xs-4 inTheGame"><div id="liarsDice1" class="bigger"><i class="glyphicon glyphicon-adjust" title="dice"></i></div></div><div id="liar2" class="col-xs-4 inTheGame"><div id="liarsDice2" class="bigger"><i class="glyphicon glyphicon-adjust" title="dice"></i></div></div><div id="liar3" class="col-xs-4 inTheGame"><div id="liarsDice3" class="bigger"><i class="glyphicon glyphicon-adjust" title="dice"></i></div></div><div id="liar4" class="col-xs-4 inTheGame"><div id="liarsDice4" class="bigger"><i class="glyphicon glyphicon-adjust" title="dice"></i></div></div><div id="liar5" class="col-xs-4 inTheGame"><div id="liarsDice5" class="bigger"><i class="glyphicon glyphicon-adjust" title="dice"></i></div></div><div id="liar6" class="col-xs-4 inTheGame"><div id="liarsDice6" class="bigger"><i class="glyphicon glyphicon-adjust" title="dice"></i></div></div>';
  bonesRoller.innerHTML = "Roll Them Bones<br/><i class='glyphicon glyphicon-repeat'></i>";
  
  }
  
function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
	//The maximum is inclusive and the minimum is inclusive 
	}
  
var randomNumber1 = getRandom(1,6);
var randomNumber2 = getRandom(1,6);
var randomNumber3 = getRandom(1,6);
var randomNumber4 = getRandom(1,6);
var randomNumber5 = getRandom(1,6);
var randomNumber6 = getRandom(1,6);

var liarsDice1 = document.getElementById("liarsDice1");
var liarsDice2 = document.getElementById("liarsDice2");
var liarsDice3 = document.getElementById("liarsDice3");
var liarsDice4 = document.getElementById("liarsDice4");
var liarsDice5 = document.getElementById("liarsDice5");
var liarsDice6 = document.getElementById("liarsDice6");

switch(randomNumber1) {
  case 1:
  liarsDice1.innerHTML = "<img class='dieStyle' src='dice/die1.png'/>";
  break;
  case 2:
  liarsDice1.innerHTML = "<img class='dieStyle' src='dice/die2.png'/>";
  break;
  case 3:
  liarsDice1.innerHTML = "<img class='dieStyle' src='dice/die3.png'/>";
  break;
  case 4:
  liarsDice1.innerHTML = "<img class='dieStyle' src='dice/die4.png'/>";
  break;
  case 5:
  liarsDice1.innerHTML = "<img class='dieStyle' src='dice/die5.png'/>";
  break;
  case 6:
  liarsDice1.innerHTML = "<img class='dieStyle' src='dice/die6.png'/>";
  break;
}
switch(randomNumber2) {
  case 1:
  liarsDice2.innerHTML = "<img class='dieStyle' src='dice/die1.png'/>";
  break;
  case 2:
  liarsDice2.innerHTML = "<img class='dieStyle' src='dice/die2.png'/>";
  break;
  case 3:
  liarsDice2.innerHTML = "<img class='dieStyle' src='dice/die3.png'/>";
  break;
  case 4:
  liarsDice2.innerHTML = "<img class='dieStyle' src='dice/die4.png'/>";
  break;
  case 5:
  liarsDice2.innerHTML = "<img class='dieStyle' src='dice/die5.png'/>";
  break;
  case 6:
  liarsDice2.innerHTML = "<img class='dieStyle' src='dice/die6.png'/>";
  break;
}
switch(randomNumber3) {
  case 1:
  liarsDice3.innerHTML = "<img class='dieStyle' src='dice/die1.png'/>";
  break;
  case 2:
  liarsDice3.innerHTML = "<img class='dieStyle' src='dice/die2.png'/>";
  break;
  case 3:
  liarsDice3.innerHTML = "<img class='dieStyle' src='dice/die3.png'/>";
  break;
  case 4:
  liarsDice3.innerHTML = "<img class='dieStyle' src='dice/die4.png'/>";
  break;
  case 5:
  liarsDice3.innerHTML = "<img class='dieStyle' src='dice/die5.png'/>";
  break;
  case 6:
  liarsDice3.innerHTML = "<img class='dieStyle' src='dice/die6.png'/>";
  break;
}
switch(randomNumber4) {
  case 1:
  liarsDice4.innerHTML = "<img class='dieStyle' src='dice/die1.png'/>";
  break;
  case 2:
  liarsDice4.innerHTML = "<img class='dieStyle' src='dice/die2.png'/>";
  break;
  case 3:
  liarsDice4.innerHTML = "<img class='dieStyle' src='dice/die3.png'/>";
  break;
  case 4:
  liarsDice4.innerHTML = "<img class='dieStyle' src='dice/die4.png'/>";
  break;
  case 5:
  liarsDice4.innerHTML = "<img class='dieStyle' src='dice/die5.png'/>";
  break;
  case 6:
  liarsDice4.innerHTML = "<img class='dieStyle' src='dice/die6.png'/>";
  break;
}
switch(randomNumber5) {
  case 1:
  liarsDice5.innerHTML = "<img class='dieStyle' src='dice/die1.png'/>";
  break;
  case 2:
  liarsDice5.innerHTML = "<img class='dieStyle' src='dice/die2.png'/>";
  break;
  case 3:
  liarsDice5.innerHTML = "<img class='dieStyle' src='dice/die3.png'/>";
  break;
  case 4:
  liarsDice5.innerHTML = "<img class='dieStyle' src='dice/die4.png'/>";
  break;
  case 5:
  liarsDice5.innerHTML = "<img class='dieStyle' src='dice/die5.png'/>";
  break;
  case 6:
  liarsDice5.innerHTML = "<img class='dieStyle' src='dice/die6.png'/>";
  break;
}
switch(randomNumber6) {
  case 1:
  liarsDice6.innerHTML = "<img class='dieStyle' src='dice/die1.png'/>";
  break;
  case 2:
  liarsDice6.innerHTML = "<img class='dieStyle' src='dice/die2.png'/>";
  break;
  case 3:
  liarsDice6.innerHTML = "<img class='dieStyle' src='dice/die3.png'/>";
  break;
  case 4:
  liarsDice6.innerHTML = "<img class='dieStyle' src='dice/die4.png'/>";
  break;
  case 5:
  liarsDice6.innerHTML = "<img class='dieStyle' src='dice/die5.png'/>";
  break;
  case 6:
  liarsDice6.innerHTML = "<img class='dieStyle' src='dice/die6.png'/>";
  break;
}

}

//********************


function loseDie(){

  var gameBoard = document.getElementById("liarsDiceBoard");
  var bonesRoller = document.getElementById("bonesRoller");
  
  if ($("#liar6").hasClass("inTheGame")){
    $("#liar6").animate({opacity:"0"},"slow");
    $("#liar6").removeClass("inTheGame");
    $("#liar5").addClass("nextUp");
  } else if ($("#liar5").hasClass("inTheGame") && $("#liar5").hasClass("nextUp")){
    $("#liar5").animate({opacity:"0"},"slow");
    $("#liar5").removeClass("inTheGame");
    $("#liar5").removeClass("inTheGame");
    $("#liar4").addClass("nextUp");
  } else if ($("#liar4").hasClass("inTheGame") && $("#liar4").hasClass("nextUp")){
    $("#liar4").animate({opacity:"0"},"slow");
    $("#liar4").removeClass("inTheGame");
    $("#liar4").removeClass("inTheGame");
    $("#liar3").addClass("nextUp");
  } else if ($("#liar3").hasClass("inTheGame") && $("#liar3").hasClass("nextUp")){
    $("#liar3").animate({opacity:"0"},"slow");
    $("#liar3").removeClass("inTheGame");
    $("#liar3").removeClass("inTheGame");
    $("#liar2").addClass("nextUp");
  } else if ($("#liar2").hasClass("inTheGame") && $("#liar2").hasClass("nextUp")){
    $("#liar2").animate({opacity:"0"},"slow");
    $("#liar2").removeClass("inTheGame");
    $("#liar2").removeClass("inTheGame");
    $("#liar1").addClass("nextUp");
  } else if ($("#liar1").hasClass("inTheGame") && $("#liar1").hasClass("nextUp")){
    $("#liar1").animate({opacity:"0"},"slow");
    gameBoard.innerHTML = "<p id='loser' class='bigger'>Bootstrap Bill, you're a liar, and you will spend an eternity on this ship!</p>";
    bonesRoller.innerHTML = "New Game";
  }
  
}
