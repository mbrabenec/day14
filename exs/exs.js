const button = document.querySelector("input");
const walking = document.querySelector(".walking");
const standing = document.querySelector(".standing");
const span = document.querySelector("span");

//listeners

button.addEventListener("click", cross);

//handler

function cross () {

    let delay = (Math.floor(Math.random()*6) +1)*1000;

    button.removeEventListener("click", cross);
    setTimeout(() => {
        greenOn()
    }, delay);

}

//helper

function greenOn() {
    walking.classList.toggle("walking--on");
    standing.classList.toggle("standing--off");
    

    let time = 5;
    
    let timer = setInterval(() => {
        
        span.textContent = time;
        time = time -1;
        if(time === -1) {
            backToRed();
            clearInterval(timer);
            span.textContent="";  
        }
    }, 1000);
}

function backToRed() {
    walking.classList.toggle("walking--on");
    standing.classList.toggle("standing--off");
    button.addEventListener("click", cross);
}

//////////////    //////////////  //////////////  //////////////  //////////////  
//////////////  //////////////  //////////////  //////////////  //////////////
//////////////  //////////////  //////////////  //////////////  //////////////  

const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const timer__go = document.querySelector("#timer__go");
const timer__resent = document.querySelector("#timer__reset");

//listeners

timer__go.addEventListener("click", kitchenTimer);
// timer__resent.addEventListener("click", );

function kitchenTimer () {

    let secs = Number(sec.value);
    let mins = Number(min.value);

    let time = secs + (mins * 60);

    let timer = setInterval(() => {
        time--;
        sec.value = time % 60;
        min.value = Math.floor(time/60);
        if (timer === 0) {
            alert("chicken ready");
            clearInterval(timer); 
        }
    
    }, 1000);  

}

let minInt = setInterval(() => {
    mins--;
    min.value = mins;
    if (mins === 0) clearInterval(minInt);

}, 1000); // change to 60000

