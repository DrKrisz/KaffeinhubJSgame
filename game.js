// Initialize the money, caffe, and timer variables
var money = 100;
var caffe = 0;
var timer = 5;

// Get the Kaffe price element
var kaffePriceInput = document.getElementById("kaffePrice");

// Function to update the money display
function updateMoneyDisplay() {
    document.getElementById("moneyDisplay").textContent = money;
}

// Function to update the caffe display
function updateCaffeDisplay() {
    document.getElementById("caffeDisplay").textContent = caffe;
}

// Function to update the timer display
function updateTimerDisplay() {
    document.getElementById("timerDisplay").textContent = timer + " seconds";
}

// Function to sell a kaffe and get money
function sellKaffe() {
    var kaffePrice = parseInt(kaffePriceInput.value, 10);
    if (caffe >= 1) {
        // Subtract 1 from caffe
        caffe -= 1;
        // Add the user-defined Kaffe price to money
        money += kaffePrice;
        // Update the displays
        updateMoneyDisplay();
        updateCaffeDisplay();
    }
}

// Event listener for the button click
document.getElementById("spendButton").addEventListener("click", function() {
    // Check if there's enough money to spend
    if (money >= 10) {
        // Subtract 10 from money
        money -= 10;
        // Add 1 to caffe
        caffe += 1;
        // Update the displays
        updateMoneyDisplay();
        updateCaffeDisplay();
    } else {
        alert("Not enough money!");
    }
});

// Event listener for the Kaffe price input
kaffePriceInput.addEventListener("input", function() {
    // Update the displayed Kaffe price
    document.getElementById("kaffePriceDisplay").textContent = kaffePriceInput.value;
});

// Initial displays
updateMoneyDisplay();
updateCaffeDisplay();
updateTimerDisplay();

// Set up a timer to sell kaffe every second and update the timer display
setInterval(function() {
    timer -= 1;
    updateTimerDisplay();
    if (timer <= 0) {
        sellKaffe();
        timer = 5; // Reset the timer after selling a kaffe
        updateTimerDisplay();
    }
}, 1000);