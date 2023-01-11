const Level = document.querySelector('.by-level');
const Start = document.querySelector('.btn');

Start.addEventListener('click', Initial_Beginning)
Level.addEventListener('click',Start_by_level );

function Initial_Beginning (){
    document.querySelector('.btn').style.opacity = 0;
    document.querySelector('.by-level').style.opacity = 1;
    document.querySelector('.by-topic').style.opacity = 1;
}



function Start_by_level(){
    document.querySelector('.by-level').style.opacity = 0;
    document.querySelector('.by-topic').style.opacity = 0;
}
