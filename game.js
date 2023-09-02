var money = 100;
var caffe = 0;

// Function to update the money display
function updateMoneyDisplay() {
    document.getElementById("moneyDisplay").textContent = money;
}

// Function to update the caffe display
function updateCaffeDisplay() {
    document.getElementById("caffeDisplay").textContent = caffe;
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

// Initial displays
updateMoneyDisplay();
updateCaffeDisplay();