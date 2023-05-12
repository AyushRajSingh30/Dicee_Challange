const a = Math.floor((Math.random() * 6)) + 1;


var randomimages = ("dice" + a + ".png");
var randomchoise = "images/" + randomimages;
let Image1=document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomchoise);

const b=Math.floor((Math.random() *6)) + 1;
var randomimage="dice"+b+".png";
var randomchoise2= "images/" + randomimage;
let Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomchoise2);


if (a > b) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (b > a) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
