const counterText = document.querySelector("#counter-text");
const addButton = document.getElementById("button-add");
const subtractButton = document.getElementById("button-subtract");

let counterVal = 0;

function updateCounter() {
    counterText.textContent = counterVal;
}

addButton.addEventListener("click", function () {
    counterVal++;
    updateCounter();
});

subtractButton.addEventListener("click", function () {
    if (counterVal > 0) { 
        counterVal--;
        updateCounter();
    }
});

updateCounter();
