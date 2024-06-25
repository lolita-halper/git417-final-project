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



//Form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("messages");
    const prefPhoneInput = document.getElementById("pref-phone");
    const prefEmailInput = document.getElementById("pref-email");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Full Name is required.");
        }

        if (emailInput.value.trim() === "") {
            isValid = false;
            alert("Email is required.");
        }

        if (phoneInput.value.trim() === "") {
            isValid = false;
            alert("Phone is required.");
        }

        if (messageInput.value.trim() === "") {
            isValid = false;
            alert("Message is required.");
        }

        if (!prefPhoneInput.checked && !prefEmailInput.checked) {
            isValid = false;
            alert("Preferred Contact Method is required.");
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });
});


/* STICKY NAVIGATION */

$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
});
