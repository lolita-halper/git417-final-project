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



// Shopping Cart

document.addEventListener("DOMContentLoaded", function () {
    // Step 5: Declare an empty array to store products
    let products = [];
  
    // Define the products
    const productItems = [
      {
        name: "Cupcake",
        flavor: "Chocolate",
        frosting: "Mint Buttercream",
        price: 24,
        img: "images/cupcake-chocolate-mint.jpg"
      }
    ];
  
    // Reference to the cart count and cart list elements
    const cartCount = document.querySelector("#pastries span");
    const cartList = document.querySelector(".listCart");
  
    // Add event listener to the "Add to Cart" button
    const addCartButtons = document.querySelectorAll(".addCart");
    addCartButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        addToCart(productItems[index]);
      });
    });
  
    // Function to add a product to the cart
    function addToCart(product) {
      products.push(product);
      updateCart();
    }
  
    // Function to update the cart display
    function updateCart() {
      cartList.innerHTML = "";
      products.forEach((product, index) => {
        const productItem = document.createElement("div");
        productItem.classList.add("cartItem");
        productItem.innerHTML = `
                  <h4>${product.name}</h4>
                  <p>Flavor: ${product.flavor}</p>
                  <p>Frosting: ${product.frosting}</p>
                  <p>Price: $${product.price}/half doz</p>
                  <button class="removeCart" data-index="${index}">Remove</button>
              `;
        cartList.appendChild(productItem);
      });
  
      cartCount.textContent = products.length;
      addRemoveEventListeners();
    }
  
    // Function to add event listeners to the "Remove" buttons
    function addRemoveEventListeners() {
      const removeCartButtons = document.querySelectorAll(".removeCart");
      removeCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          removeFromCart(index);
        });
      });
    }
  
    // Function to remove a product from the cart
    function removeFromCart(index) {
      products.splice(index, 1);
      updateCart();
    }
  
    // Add event listener to the "Close" button
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelector(".cartTab").classList.toggle("hidden");
      });
    });
  });