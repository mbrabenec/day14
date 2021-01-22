// add listeners

document.querySelector(".inp__button").addEventListener("click", addIt);
document.querySelector(".inp__text").addEventListener("keypress", addItEnter);

// globals

let total = 0;

//event handlers

function addIt() {
    const textField = document.querySelector(".inp__text");
    const toAdd = Number(textField.value)

    total = total + toAdd;
    document.querySelector(".display").textContent = total;

    textField.textContent = "";
    textField.value = "";
    textField.focus();
}

function addItEnter(e) {
    if(e.keyCode === 13) {
        addIt();
    }
}

// on load

window.onload = () => {
    document.querySelector(".inp__text").focus();
}
