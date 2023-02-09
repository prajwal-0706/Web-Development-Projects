const carousel = document.querySelector(".carousel");
const mouse = document.querySelector(".mouse-scroll");


carousel.addEventListener("mousemove", (e) => {
    let x = e.pageX - 48 ;
    let y = e.pageY - 48;

    mouse.style.opacity = '1';
    mouse.style.zIndex = "10";

    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;
});