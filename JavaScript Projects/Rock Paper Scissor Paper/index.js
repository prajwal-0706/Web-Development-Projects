const image = document.querySelectorAll('#image');
const img_1 = document.querySelector('.image-1');
const img_2 = document.querySelector('.image-2');
const img_3 = document.querySelector('.image-3');
const button = document.querySelector('h1');

button.addEventListener('click', Dance);



function Img1(){
    img_1.style.opacity = '1';
    img_2.style.opacity = '0';
    img_3.style.opacity = '0';
}

function Img2(){
    img_1.style.opacity = '0';
    img_2.style.opacity = '1';
    img_3.style.opacity = '0';
}

function Img3(){
    img_1.style.opacity = '0';
    img_2.style.opacity = '0';
    img_3.style.opacity = '1';
}

function Dance(){
    const Arr = ['Rock', 'Paper', 'Scissor'];
    var no = Arr[Math.floor(Math.random() * Arr.length)];
    

    if(no === 'Rock'){
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
    else if(no === 'Paper'){
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
            setTimeout(Img1, 1500);
            setTimeout(Img2,1750);
            setTimeout(Img3, 2000);
            setTimeout(Img2,2250);
            setTimeout(Img1, 2500);
        }
    }
}
