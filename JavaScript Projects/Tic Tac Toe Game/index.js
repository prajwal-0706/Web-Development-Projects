const cells = document.querySelectorAll('.game-box');
const Player1 = document.querySelector('.player1');
const Player2 = document.querySelector('.player2');
const restart  = document.querySelector(".btn")
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const left_image = document.querySelector(".left");
const right_image = document.querySelector(".right");
const player_display = document.querySelector(".player");





let flag = true;





cells.forEach(element => {
    element.addEventListener('click',() =>{
        if(element.innerHTML !== 'X' && element.innerHTML !== 'O' ){
            if(flag){
                element.innerHTML = "X";
                flag = false;
                
            }
            else{
                element.innerHTML = "O";
                flag = true;
            }
            // first Row Win
            if((b1.textContent === 'X'&& b2.textContent === 'X') && (b2.textContent === 'X' && b3.textContent === 'X')){
                player_1_won();
                setTimeout(clear,3000);            
            }
            if((b1.textContent === 'O'&& b2.textContent === 'O') && (b2.textContent === 'O' && b3.textContent === 'O')){
                player_2_won();
                setTimeout(clear,3000);
            }
            // Second row win
            if((b4.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent === 'X' && b6.textContent === 'X')){
                player_1_won();
                setTimeout(clear,3000);
            }
            if((b4.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b6.textContent === 'O')){
                player_2_won();
                setTimeout(clear,3000);
            }

            //Third Row Win
            if((b7.textContent === 'X'&& b8.textContent === 'X') && (b8.textContent ==='X' && b9.textContent === 'X')){
                player_1_won();
                setTimeout(clear,3000);
            }
            if((b7.textContent === 'O'&& b8.textContent === 'O') && (b8.textContent === 'O' && b9.textContent === 'O')){
                player_2_won();
                setTimeout(clear,3000);
            }

            //first col win
            if((b1.textContent === 'X'&& b4.textContent === 'X') && (b4.textContent ==='X' && b7.textContent === 'X')){
                player_1_won();
                setTimeout(clear,3000);
            }
            if((b1.textContent === 'O'&& b4.textContent === 'O') && (b4.textContent === 'O' && b7.textContent === 'O')){
                player_2_won();
                setTimeout(clear,3000);
            }
            // Second col win
            if((b2.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent === 'X' && b8.textContent === 'X')){
                player_1_won();
                setTimeout(clear,3000);
            }
            if((b2.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b8.textContent === 'O')){
                player_2_won();
                setTimeout(clear,3000);
            }
            //third col win
            if((b3.textContent === 'X'&& b6.textContent === 'X') && (b6.textContent === 'X' && b9.textContent === 'X')){
                player_1_won();
                setTimeout(clear,3000);
            }
            if((b3.textContent === 'O'&& b6.textContent === 'O') && (b6.textContent === 'O' && b9.textContent === 'O')){
                player_2_won();
                setTimeout(clear,3000);
            }

            // First Diagonal win
            if((b1.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent === 'X' && b9.textContent === 'X')){
                player_1_won();
                clear();
            }
            if((b1.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b9.textContent === 'O')){
                player_2_won();
                 setTimeout(clear,3000);
            }

            // second diagonal win
            if((b3.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent ==='X' && b7.textContent === 'X')){
                player_1_won();
                 setTimeout(clear,3000);
            }
            if((b3.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b7.textContent === 'O')){
                player_2_won();
                 setTimeout(clear,3000);
            }
            if((b1.innerHTML === 'X'|| b1.innerHTML === 'O') && (b2.innerHTML === 'X'|| b2.innerHTML === 'O') && (b3.innerHTML === 'X'|| b3.innerHTML ==='O') && (b4.innerHTML === 'X'|| b4.innerHTML === 'O') && (b5.innerHTML === 'X'|| b5.innerHTML === 'O') && (b6.innerHTML === "X"|| b6.innerHTML === 'O') && (b7.innerHTML === 'X'|| b7.innerHTML === 'O') && (b8.innerHTML === 'X'|| b8.innerHTML === 'O') && (b9.innerHTML === 'X'|| b9.innerHTML === 'O') ){
                tie_or_wot();
                setTimeout(clear,3000);
            }
        }

    });
});

function clear(){
    cells.forEach((element) =>{
        element.innerHTML = "";
    })
    left_image.style.opacity = '0' ;
    right_image.style.opacity = '0' ;
    player_display.innerHTML = "";
}
restart.addEventListener('click',clear)

function player_1_won(){
    left_image.style.opacity = '1' ;
    right_image.style.opacity = '1' ;
    player_display.style.transition = "0.8s";
    player_display.innerHTML = "<h3>Player 1 Won ✨</h3>"
}
function player_2_won(){
    left_image.style.opacity = '1' ;
    right_image.style.opacity = '1' ;
    player_display.style.transition = "0.8s";
    player_display.innerHTML = "<h3>Player 2 Won ✨</h3>"
}

function tie_or_wot(){
    player_display.innerHTML = "<h3>Well Played Both...Its a Tie</h3>";
    left_image.style.opacity = '1' ;
    right_image.style.opacity = '1' ;
    player_display.style.transition = "0.8s";
}