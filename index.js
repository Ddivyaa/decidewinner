var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImangeSource =  randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImangeSource);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImangeSource2 =  randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImangeSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML = "<em>Player 1 Wins</em>";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h2").innerHTML = "<em>Player 2 Wins</em>";
}
else {
    document.querySelector("h2").innerHTML = "<em>Draw</em>";
}