const p1Disp = document.querySelector('.P1');
const p2Disp = document.querySelector('.P2');
const P1 = document.querySelector('.p1Display');
const P2 = document.querySelector('.p2Display');
const reset = document.querySelector('.Reset')
const winning = document.querySelector('#win');

let p1Score = 0;
let p2Score = 0;
let Win = 5 ;
let gameOver = false;

p1Disp.addEventListener('click', () => {
    
    if(gameOver === false){      
        p1Score += 1 ;
        P1.textContent = p1Score;
    }

    if(p1Score === Win){
        gameOver = true;
    }
});

p2Disp.addEventListener('click', () => {
    if(gameOver === false){
        p2Score += 1 ;
        P2.textContent = p2Score;
    }

    if(p2Score === Win){
        gameOver = true;
    }

});

winning.addEventListener('change', function () {
    Win = parseInt(this.value);
    p1Score = 0;
    P1.textContent = 0;
    p2Score = 0;
    P2.textContent = 0;

});

reset.addEventListener('click', () => {
    p1Score = 0;
    P1.textContent = 0;
    p2Score = 0;
    P2.textContent = 0;
    gameOver = false;
});










