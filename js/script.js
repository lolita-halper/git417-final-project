// Macaron Game with random numbers

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



//Form for customer
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


// Sticky Navigation

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


// Change Color - light and dark mode for body element
function toggleBodyColor() {
    var element = document.body;
    element.classList.toggle("mystyle");
}

// Change Color - light and dark mode for a specific element
function toggleDivColor() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}

// Function to call both toggle functions
function toggleColors() {
    toggleBodyColor();
    toggleDivColor();

}



// Function for my Shopping Cart

// Select all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.addCart');

// Initialize the cart count and total sum
let cartCount = 0;
let totalSum = 0;
const cartCountDisplay = document.querySelector('#pastries span');
const totalSumDisplay = document.querySelector('#total-sum');

// Function to update cart display
function updateCartDisplay() {
    cartCountDisplay.textContent = cartCount;
    totalSumDisplay.textContent = totalSum.toFixed(2); // Ensure total sum is formatted to two decimal places
}

// Add event listener to each 'Add to Cart' button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get item details from button's data attributes
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        // Update cart count
        cartCount++;
        totalSum += itemPrice;
        cartCountDisplay.textContent = cartCount;
        updateCartDisplay();

    })
});

// Select the "Remove One Item" button
const removeOneItemButton = document.querySelector('.removeOneItem');

// Add event listener to the "Remove One Item" button
removeOneItemButton.addEventListener('click', () => {
    // Ensure there is at least one item in the cart to remove
    if (cartCount > 0) {
        // Get the price of the last added item to remove
        const lastAddedItemPrice = parseFloat(removeOneItemButton.getAttribute('data-last-price'));

        // Update cart count and total sum
        cartCount--;
        totalSum -= lastAddedItemPrice;

        // Update cart display
        cartCountDisplay.textContent = cartCount;
        updateCartDisplay();
    }
});

