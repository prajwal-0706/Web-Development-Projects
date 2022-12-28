const cells = document.querySelectorAll('.game-box');
const Player1 = document.querySelector('.player1');
const Player2 = document.querySelector('.player2');

let flag = true;


cells.forEach(element => {
    element.addEventListener('click',() =>{

        if(flag){
            element.innerHTML = "X";
            flag = false;
        }
        else{
            element.innerHTML = "O";
            flag = true;
        }
    });
});

