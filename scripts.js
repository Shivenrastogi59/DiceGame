var randomNum = () => {
    return Math.floor(Math.random() * 6) + 1;
};

function diceRoll() {
    randomNum1 = randomNum();
    randomNum2 = randomNum();

    var randomImage1 = "dice" + randomNum1 + ".png";
    var randomImage2 = "dice" + randomNum2 + ".png";

    var sourceOfImage1 = "./images/" + randomImage1;
    var sourceOfImage2 = "./images/" + randomImage2;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", sourceOfImage1);

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", sourceOfImage2);

    if(randomNum1 > randomNum2){
        document.querySelector("h1").innerHTML = "🚩Player1 won!";
    }else if(randomNum2 > randomNum1){
        document.querySelector("h1").innerHTML = "Player2 won!🚩";
    }else{
        document.querySelector("h1").innerHTML = "It's a tie!";
    }
}