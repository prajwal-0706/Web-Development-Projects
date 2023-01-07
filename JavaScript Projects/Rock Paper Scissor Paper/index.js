const image = document.querySelectorAll('#image');
const img_1 = document.querySelector('.image-1');
const img_2 = document.querySelector('.image-2');
const img_3 = document.querySelector('.image-3');

const Arr = ['Rock', 'Paper', 'Scissor'];

let no = Math.floor(Math.random() * Arr.length );

console.log(no);

image.forEach((Element) => {
    Element.addEventListener('click',() => {
        alert(Element.ariaValueMax);
    }); 
});