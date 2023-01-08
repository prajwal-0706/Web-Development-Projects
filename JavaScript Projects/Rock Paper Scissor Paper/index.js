const image = document.querySelectorAll('#image');
const img_1 = document.querySelector('.image-1');
const img_2 = document.querySelector('.image-2');
const img_3 = document.querySelector('.image-3');
const button_1 = document.querySelectorAll('button'); 
const Img_1 = document.querySelector('.imag-1');
const Img_2 = document.querySelector('.imag-2');
const Img_3 = document.querySelector('.imag-3');
const button = document.querySelector('.PlayerScore');
const but = document.querySelector('.ComputerScore');
let choice = '';
const Arr = ['Rock', 'Paper', 'Scissor'];
var no = Arr[Math.floor(Math.random() * Arr.length)];


function Img1(){ // Paper
    img_1.style.opacity = '1';
    img_2.style.opacity = '0';
    img_3.style.opacity = '0';
}

function Img2(){ // Scissor
    img_1.style.opacity = '0';
    img_2.style.opacity = '1';
    img_3.style.opacity = '0';
}

function Img3(){ //Rock
    img_1.style.opacity = '0';
    img_2.style.opacity = '0';
    img_3.style.opacity = '1';
}

function Dance(){
    if(choice === 'Rock'){
        for(let i = 0 ; i < 10 ; i++){
            Img2();
            setTimeout(Img3,250);
            setTimeout(Img1, 500);
            setTimeout(Img2,750);
            setTimeout(Img1, 1000);
            setTimeout(Img3,1250);
            setTimeout(Img1, 1500);
            setTimeout(Img2,1750);
            setTimeout(Img1, 2000);
            setTimeout(Img2,2250);
            setTimeout(Img3, 2500);
        }
    }
    else if(choice === 'Paper'){
        for(let i = 0 ; i < 10 ; i++){
            Img2();
            setTimeout(Img3,250);
            setTimeout(Img1, 500);
            setTimeout(Img2,750);
            setTimeout(Img1, 1000);
            setTimeout(Img3,1250);
            setTimeout(Img1, 1500);
            setTimeout(Img2,1750);
            setTimeout(Img3, 2000);
            setTimeout(Img2,2250);
            setTimeout(Img1, 2500);
        }
    }
    else{
        for(let i = 0 ; i < 10 ; i++){
            Img2();
            setTimeout(Img3,250);
            setTimeout(Img1, 500);
            setTimeout(Img2,750);
            setTimeout(Img1, 1000);
            setTimeout(Img3,1250);
            setTimeout(Img2, 1500);
            setTimeout(Img1,1750);
            setTimeout(Img2, 2000);
            setTimeout(Img3,2250);
            setTimeout(Img2, 2500);
        }
    }
}

function img1(){ // Paper
    Img_1.style.opacity = '1';
    Img_2.style.opacity = '0';
    Img_3.style.opacity = '0';
}

function img2(){ // Scissors
    Img_1.style.opacity = '0';
    Img_2.style.opacity = '1';
    Img_3.style.opacity = '0';
}

function img3(){ //rock
    Img_1.style.opacity = '0';
    Img_2.style.opacity = '0';
    Img_3.style.opacity = '1';
}


function dance(){
    if(no === 'Rock'){
        for(let i = 0 ; i < 10 ; i++){
            img2();
            setTimeout(img3,250);
            setTimeout(img1, 500);
            setTimeout(img2,750);
            setTimeout(img1, 1000);
            setTimeout(img3,1250);
            setTimeout(img1, 1500);
            setTimeout(img2,1750);
            setTimeout(img1, 2000);
            setTimeout(img2,2250);
            setTimeout(img3, 2500);
        }
    }
    else if(no === 'Paper'){
        for(let i = 0 ; i < 10 ; i++){
            img2();
            setTimeout(img3,250);
            setTimeout(img1, 500);
            setTimeout(img2,750);
            setTimeout(img1, 1000);
            setTimeout(img3,1250);
            setTimeout(img1, 1500);
            setTimeout(img2,1750);
            setTimeout(img3, 2000);
            setTimeout(img2,2250);
            setTimeout(img1, 2500);
        }
    }
    else{
        for(let i = 0 ; i < 10 ; i++){
            img2();
            setTimeout(img3,250);
            setTimeout(img1, 500);
            setTimeout(img2,750);
            setTimeout(img1, 1000);
            setTimeout(img3,1250);
            setTimeout(img1, 1500);
            setTimeout(img2,1750);
            setTimeout(img3, 2000);
            setTimeout(img1,2250);
            setTimeout(img2, 2500);
        }
    }
}

button_1.forEach((button) =>{
    button.addEventListener('click', () =>{
        choice = button.textContent;
        Dance();
        dance();
    });
});



