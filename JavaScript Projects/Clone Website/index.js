const carousel = document.querySelector(".carousel");
const mouse = document.querySelector(".mouse-scroll");


carousel.addEventListener("mousemove", (e) => {
    let x = e.pageX - 48;
    let y = e.pageY - 48;

    mouse.style.opacity = '1';
    mouse.style.zIndex = "10";

    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;
});

const select_1 = document.querySelector(".select-1");
const select_2 = document.querySelector(".select-2");
const config = document.querySelector(".configuration");
const text_3 = document.querySelector(".text-3");


select_1.addEventListener("click", () => {
    select_1.classList.add("active");
    select_2.classList.remove("active");
    config.classList.add("active");
    text_3.textContent = "HURACÁN";
});

select_2.addEventListener("click", () => {
    select_2.classList.add("active");
    select_1.classList.remove("active");
    config.classList.remove("active");
    text_3.textContent = "URUS";

});