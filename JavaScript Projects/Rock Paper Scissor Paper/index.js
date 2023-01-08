// Declarations..
const image = document.querySelectorAll('#image');
const img_1 = document.querySelector('.image-1');
const img_2 = document.querySelector('.image-2');
const img_3 = document.querySelector('.image-3');
const button = document.querySelectorAll('.button'); 
const Img_1 = document.querySelector('.imag-1');// Paper
const Img_2 = document.querySelector('.imag-2'); // Scissor
const Img_3 = document.querySelector('.imag-3'); // Rock
const Start = document.querySelector('.btn');
const Result = document.querySelector('.result');
const PlayerS = document.querySelector('.PlayerScore');
const ComputerS = document.querySelector('.ComputerScore');
let choice = '';
const Arr = ['Rock', 'Paper', 'Scissor'];
var no = Arr[Math.floor(Math.random() * Arr.length)];
let PlayerScore = 0;
let ComputerScore = 0;

Start.addEventListener('click',Display);

function Display(){
    document.querySelector('.Score').style.opacity = '1';
    document.querySelector('.select-btn').style.opacity = '1';
    Start.style.opacity = '0';
    Result.style.transform = 'translate(0px, 160px)';
}

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

button.forEach((button) =>{
    button.addEventListener('click', () =>{
        choice = button.textContent;
        Dance();
        dance();
        setTimeout(checkwin,2550);
        Result.style.opacity = '0';
        setTimeout(clearImg, 2700);
    });
});

function clearImg(){
    img_1.style.opacity = '0';
    img_2.style.opacity = '0';
    img_3.style.opacity = '0';
    Img_1.style.opacity = '0';
    Img_2.style.opacity = '0';
    Img_3.style.opacity = '0';
}

function checkwin(){
    let Player = false;
    let Computer = false;

    if(choice === no){
        console.log("It's Tie");
        if(Player === false && Computer === false){
            Result.innerHTML = "It's a Tie";
            Result.style.opacity = '1';
            Result.style.left= '650px';

        }
    }

    // Player Win Conditons

    if(choice === 'Paper' && no ==='Rock'){
        Player = true;
        ++PlayerScore;
        Computer =false;
        if(Player === true && Computer === false){
            Result.innerHTML = "Player Won";
            Result.style.opacity = '1';
            Result.style.left = '620px';
            PlayerS.innerHTML = `Player Score - ${PlayerScore}`;
        }
        Player = false;
    }
    if(choice === 'Rock' && no === 'Scissor'){
        Player = true;
        Computer =false;
        ++PlayerScore;
        if(Player === true && Computer === false){
            Result.innerHTML = "Player Won";
            Result.style.opacity = '1';
            Result.style.left = '620px';
            PlayerS.innerHTML = `Player Score - ${PlayerScore}`;
        }
        Player = false;
    }

    if(choice === 'Scissor' && no === 'Paper'){
        Player = true;
        Computer =false;
        ++PlayerScore;
        if(Player === true && Computer === false){
            Result.innerHTML = "Player Won";
            Result.style.opacity = '1';
            Result.style.left = '620px';
            PlayerS.innerHTML = `Player Score - ${PlayerScore}`;
        }core
        Player = false;
    }

    // Computer Win Condtions

    if(no === 'Paper' && choice ==='Rock'){
        Computer = true;
        Player = false;
        ComputerScore++;
        if(Computer === true && Player === false){
            Result.innerHTML = "Computer Won";
            Result.style.opacity = '1';
            Result.style.left = '570px';
            ComputerS.textContent = ` Computer Score - ${ComputerScore}`
        }
        Computer = false;
    }
    if(no === 'Rock' && choice === 'Scissor'){
        Computer = true;
        Player = false;
        ComputerScore++;
        if(Computer === true && Player === false){
            Result.innerHTML = "Computer Won";
            Result.style.opacity = '1';
            Result.style.left = '570px';
            ComputerS.textContent = ` Computer Score - ${ComputerScore}`
        }
        Computer = false;
    }
    if(no === 'Scissor' && choice === 'Paper'){
        Computer = true;
        Player = false;
        ComputerScore++;
        if(Computer === true && Player === false){
            Result.innerHTML = "Computer Won";
            Result.style.opacity = '1';
            Result.style.left = '570px';
            ComputerS.textContent = ` Computer Score - ${ComputerScore}`
        }
        Computer = false;
    } 
}

