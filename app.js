//Trill and Roll
let roll = document.querySelector(".roll-effect");
let trill = document.querySelector(".trill-effect");

roll.addEventListener("click", (e) => {
    let audio = new Audio("audio/roll.mp3");
    audio.play();
});

trill.addEventListener("click", (e) => {
    let audio = new Audio("audio/trill.mp3");
    audio.play();
});

//Interactive Darbuka
const interactiveDarbuka = document.querySelector(".interactive-darbuka-img");

interactiveDarbuka.addEventListener("click", () => {
    let audio = new Audio("audio/sound.mp3");
    audio.play();
});









