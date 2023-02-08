// Start of Clock
const hrr = document.querySelector(".hr");
const mnn = document.querySelector(".mn");
const scc = document.querySelector(".sc");
let deg = 6;

setInterval(() => {
    let date = new Date();
    let hrs = date.getHours() * 30;
    let mins = date.getMinutes() * deg;
    let sec = date.getSeconds() * deg;

    hrr.style.transform = `rotateZ(${(hrs) + (mins / 12)}deg)`;

    mnn.style.transform = `rotateZ(${mins}deg)`;

    scc.style.transform = `rotateZ(${sec}deg)`;
});

// Start of Dark theme

const mode = document.querySelector(".mode");
const Container = document.querySelector(".container");

mode.addEventListener("click", () => {
    Container.classList.toggle("active");
});
