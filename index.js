var random = Math.floor(Math.random() * 6)+ 1;
var randomImage = "images/dice" + random + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var random2= Math.floor(Math.random() *6) + 1;
var randomImage2= "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(random > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";

}
 else if (random2>random){
    document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML= "Draw";
}