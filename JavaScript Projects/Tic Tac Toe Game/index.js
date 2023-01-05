// Code for tic tac toe 

// Start
const cells = document.querySelectorAll('.game-box');
const gamebox = document.querySelector('.game');
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
const Player1Display = document.querySelector(".Player1S");
const Player2Display = document.querySelector('.Player2S');
const left_image = document.querySelector(".left");
const right_image = document.querySelector(".right");
const player_display = document.querySelector(".player");
const round = document.querySelector('.rounds');
const button = document.querySelector('button');
const select = document.getElementById('choose');
const heading = document.querySelector('#tichead') ;
const body = document.querySelector('body');
var audio = new Audio('./sounds/1.mp3');
let butt = document.querySelector('.button');
var Player1Score = 0;
var Player2Score = 0;
var totalRounds = 1;
let winvalue;

restart.addEventListener('click',clear);
no_of_rounds_on_screen();

let flag = true;

function display(){
    if(flag){
        player_display.innerHTML = "<h1>Turn For 'X'</h1>"
    }
    else{
        player_display.innerHTML = "<h1>Turn For 'O'</h1>"
    }
}
cells.forEach(element =>  add(element) );


function add(element){
    element.addEventListener('click',() =>{
        if(element.innerHTML !== 'X' && element.innerHTML !== 'O' ){
            
            if(flag){
                element.innerHTML = "X";
                flag = false;
                display();             
            }
            else{
                element.innerHTML = "O";
                flag = true;
                display();
            }

            // first Row Win
            if((b1.textContent === 'X'&& b2.textContent === 'X') && (b2.textContent === 'X' && b3.textContent === 'X')){
                player_1_won();
                alert("Player 1 Won");
                clear();
                totalRounds++;

                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                    // Img();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
                
            }
            if((b1.textContent === 'O'&& b2.textContent === 'O') && (b2.textContent === 'O' && b3.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            // Second row win
            if((b4.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent === 'X' && b6.textContent === 'X')){
                player_1_won();
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b4.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b6.textContent === 'O')){
                
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }

            //Third Row Win
            if((b7.textContent === 'X'&& b8.textContent === 'X') && (b8.textContent ==='X' && b9.textContent === 'X')){
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b7.textContent === 'O'&& b8.textContent === 'O') && (b8.textContent === 'O' && b9.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }

            //first col win
            if((b1.textContent === 'X'&& b4.textContent === 'X') && (b4.textContent ==='X' && b7.textContent === 'X')){
                player_1_won();
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b1.textContent === 'O'&& b4.textContent === 'O') && (b4.textContent === 'O' && b7.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            // Second col win
            if((b2.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent === 'X' && b8.textContent === 'X')){
                player_1_won();
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b2.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b8.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            //third col win
            if((b3.textContent === 'X'&& b6.textContent === 'X') && (b6.textContent === 'X' && b9.textContent === 'X')){
                player_1_won();
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b3.textContent === 'O'&& b6.textContent === 'O') && (b6.textContent === 'O' && b9.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            

            // First Diagonal win
            if((b1.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent === 'X' && b9.textContent === 'X')){
                player_1_won();
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b1.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b9.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }

            // second diagonal win
            if((b3.textContent === 'X'&& b5.textContent === 'X') && (b5.textContent ==='X' && b7.textContent === 'X')){
                player_1_won();
                clear();
                alert("Player 1 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b3.textContent === 'O'&& b5.textContent === 'O') && (b5.textContent === 'O' && b7.textContent === 'O')){
                player_2_won();
                clear();
                alert("Player 2 Won");
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
            if((b1.innerHTML === 'X'|| b1.innerHTML === 'O') && (b2.innerHTML === 'X'|| b2.innerHTML === 'O') && (b3.innerHTML === 'X'|| b3.innerHTML ==='O') && (b4.innerHTML === 'X'|| b4.innerHTML === 'O') && (b5.innerHTML === 'X'|| b5.innerHTML === 'O') && (b6.innerHTML === "X"|| b6.innerHTML === 'O') && (b7.innerHTML === 'X'|| b7.innerHTML === 'O') && (b8.innerHTML === 'X'|| b8.innerHTML === 'O') && (b9.innerHTML === 'X'|| b9.innerHTML === 'O') ){
                tie_or_wot();
                setTimeout(clear,2000);
                Calculate();
                totalRounds++;
                if(Calculate() === Player1Score || Calculate() === Player2Score){
                    winner();
                    restartgame();
                }
                else{
                    setTimeout(no_of_rounds_on_screen,450);
                }
            }
        }

    });
}



function clear(){
    cells.forEach((element) =>{
        element.innerHTML = "";
    })
    left_image.style.opacity = '0' ;
    right_image.style.opacity = '0' ;
    player_display.innerHTML = "<h1>Turn For 'X'</h1>"
    flag = true;
}
function restartgame(){
    gamebox.style.display = "none";
    restart.style.display = 'none';
    player_display.style.display = 'none';
    Player1Display.innerHTML = "";
    Player2Display.innerHTML = "";
    heading.style.transform = "translate(10px,230px)";
    left_image.style.left = '305px' ;
    right_image.style.right = '305px' ;
    audio.play();
    newgame();
    // transform: translate(10px, 230px);
    // left 305px
}
// function Img(){
//     left_image.style.opacity = '0' ;
//     right_image.style.opacity = '0' ;
//     heading.innerHTML =`<h1 id="tichead" >Tic Tac Toe Game</h1>`;
   
// }

function player_1_won(){
    player_display.style.transition = "0.8s";
    player_display.innerHTML = "<h1>Player 1 Won ✨</h1>"
    Player1Score++;
    Player1Display.textContent = `Player 1 : ${Player1Score}`;
   
    
}
function player_2_won(){
    player_display.style.transition = "0.8s";
    player_display.innerHTML = "<h1>Player 2 Won ✨</h1>"
    Player2Score++;
    Player2Display.textContent = `Player 2 : ${Player2Score}`;
}

function tie_or_wot(){
    player_display.innerHTML = "<h1>Well Played Both...Its a Tie</h1>";
    player_display.style.transition = "0.8s";
}

// End

// Driver Code for index page....

//Start


function hello(value){
    document.cookie = value;
    
    console.log(value);
    
    console.log(getcookie());   
}
 
function getcookie(){
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    return ca[0];
}

function Calculate(){

    let total_count;
    if(getcookie() === '#'){
        total_count = 5;
    }
    else{
        total_count = getcookie();
    }
    

    var w = total_count/2 + 1;
    var win = parseInt(w);

    return win;  
}



function winner(){

    let winner = Calculate();
    

    if(Player1Score === winner || Player2Score === winner){
        if(Player1Score === winner){
            winvalue = 1;
            displayWin();
        }else{
            winvalue = 2;
            displayWin();

        }
    }
}

function displayWin(){
    round.style.display = 'block';
    left_image.style.opacity = '1' ;
    right_image.style.opacity = '1' ;
    left_image.style.zIndex = '-1' ;
    right_image.style.zIndex = '-1' ;
    round.textContent = '' ;
    heading.innerHTML = `<h1 id="tichead">Player ${winvalue} Won ✨</h1>`;
    winvalue = 1;
    
}


function no_of_rounds_on_screen(){

    round.textContent = `Round - ${totalRounds}` ;
    round.style.display = 'block';

    function clear_from_screen(){
        round.style.display = 'none';
    }
    setTimeout(clear_from_screen,1000);
}

function newgame(){
    restart.textContent = "NEW GAME";
    restart.style.display = "block";
    restart.style.transform = 'translate(-15px,300px)';
    butt.href = "./index.html";
    
}