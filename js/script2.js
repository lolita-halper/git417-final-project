function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
    let dieDisplay1 = document.getElementById("random1");
    let dieDisplay2 = document.getElementById("random2");
    let gameMessage = document.getElementById("gameMsg");

    let die1 = getRandomNumber(1, 6);
    let die2 = getRandomNumber(1, 6);

    dieDisplay1.innerHTML = die1;
    dieDisplay2.innerHTML = die2;

    if (die1 === 1 && die2 === 1) {
        gameMessage.innerHTML = "Macarons! You Win!";
    } else {
        gameMessage.innerHTML = "You Lose. Try Again.";
    }
}

document.getElementById("gamePlay").addEventListener("click", game);
