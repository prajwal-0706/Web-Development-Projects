const cells = document.querySelectorAll('.game-box');
const Player1 = document.querySelector('.player1');
const Player2 = document.querySelector('.player2');

let player1S = [];
let player2S = [];

[3,4,5];
const winningComb = [
    [2,4,6],
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [0,4,8]
    
]


function handleClick(){
    cells[i].textContent = " X ";
    alert("Hello");
}

let flag = true;

for(let i = 0 ; i<cells.length ; i++){
 cells[i].addEventListener('click',() => {
    if(flag){
        player1(i);
        
    }
    else{
        player2(i);
    }
    checkWin();
 });
}

function player1 (i){
    cells[i].textContent = "X";
    flag = false;
    player1S.push(i);
}
function player2 (i){
    cells[i].textContent = "O";
    flag = true;
    player2S.push(i);  
}


function checkWin(){
    winningComb.find((item) => {
        if(item.filter((i) => player1S.includes(i).length === 3)){
            alert("Player 1 Won");
            return item;
        }
        else if(item.filter((i) => player2S.includes(i).length === 3)){
            alert("Player 2 Won");
            
        }
        return
    })
}

