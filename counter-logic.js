// Variable to save the count to when counting up or down.
let count = 0;

// Select the different parts of the DOM.
const counter_span = document.querySelector("#value");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        if ( count > 0 ){
            value.style.color = "#41b3a3";
        }
        if (count < 0){
            value.style.color = "#e27d60";
        }
        if (count === 0){
            value.style.color = "white";
        }
    });
});