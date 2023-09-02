// Initialize the money, caffe, timer, and kaffePrice variables
var money = 100;
var caffe = 0;
var timer = getRandomTimer(5, 15); // Initial random timer (5 to 15 seconds)
var kaffePrice = 15; // Default Kaffe price

// Get the Kaffe price element and its display element
var kaffePriceInput = document.getElementById("kaffePrice");
var kaffePriceDisplay = document.getElementById("kaffePriceDisplay");

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
    if (caffe >= 1) {
        // Subtract 1 from caffe
        caffe -= 1;
        // Add the stored Kaffe price to money
        money += kaffePrice;
        // Update the displays
        updateMoneyDisplay();
        updateCaffeDisplay();
        // Recalculate the timer based on the stored Kaffe price and the given range
        timer = getRandomTimer(5, 15);
        updateTimerDisplay();
    }
}

// Function to enable the Kaffe price input and reset the timer
function enableKaffeInput() {
    kaffePriceInput.disabled = false;
    // Reset the timer to 5 seconds
    timer = 5;
    updateTimerDisplay();
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
    // Disable the Kaffe price input temporarily
    kaffePriceInput.disabled = true;
    // Update the displayed Kaffe price and its current value
    kaffePrice = parseInt(kaffePriceInput.value, 10);
    kaffePriceDisplay.textContent = kaffePrice;
    // Call enableKaffeInput after a 5-second delay to re-enable the input
    setTimeout(enableKaffeInput, 5000);
});

// Initial displays
updateMoneyDisplay();
updateCaffeDisplay();
updateTimerDisplay();

// Set up a timer to sell kaffe with a random duration
function getRandomTimer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    timer -= 1;
    updateTimerDisplay();
    if (timer <= 0) {
        sellKaffe();
    }
}, 1000);