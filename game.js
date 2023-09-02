// Initialize the money and caffe variables
var money = 100;
var caffe = 0;
var timer = 5;

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
        // Add 15 to money
        money += 15;
        // Update the displays
        updateMoneyDisplay();
        updateCaffeDisplay();
        // Reset the timer
        timer = 5;
        updateTimerDisplay();
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
        // Reset the timer
        timer = 5;
        updateTimerDisplay();
    } else {
        alert("Not enough money!");
    }
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
    }
}, 1000);