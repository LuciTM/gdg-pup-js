function checkAge() {
    let ageInput = document.getElementById('ageInput').value; 
    let result = document.getElementById('result'); 

    ageInput = Number(ageInput); 

    if (isNaN(ageInput) || ageInput < 0) {
        result.textContent = "Invalid Age. Please enter a valid number.";
        result.style.color = "red"; 
    } else if (ageInput >= 20 && ageInput <= 90) {
        result.textContent = "Category: Adult";
        result.style.color = "green";
    } else if (ageInput >= 13 && ageInput <= 19) {
        result.textContent = "Category: Teenager";
        result.style.color = "blue";
    } else if (ageInput >= 0 && ageInput <= 12) {
        result.textContent = "Category: Child";
        result.style.color = "purple";
    } else {
        result.textContent = "Invalid Age. Please enter a valid number."; 
        result.style.color = "red";
    }
}
