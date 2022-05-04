let randomNumber1 = Math.floor(Math.random()*6 +1);

let randomDiceImage = "dice"+randomNumber1+".png";

let randomSrcImage = "./images/"+randomDiceImage;

let firstImage = document.querySelectorAll("img")[0];

firstImage.setAttribute("src", randomSrcImage);




let randomNumber2 = Math.floor(Math.random()*6 +1);

let randomDiceImage2 = "dice"+randomNumber2+".png";

let randomSrcImage2 = "./images/"+randomDiceImage2;

let secondImage = document.querySelectorAll("img")[1];

secondImage.setAttribute("src", randomSrcImage2);


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}