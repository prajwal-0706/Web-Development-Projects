const Level = document.querySelector('.by-level');
const Topic = document.querySelector('.by-topic');
const Start = document.querySelector('.btn');
const levels = document.querySelectorAll('.level-1');


Start.addEventListener('click', Initial_Beginning)
Level.addEventListener('click',Start_by_level );
Topic.addEventListener('click', Start_by_level);

function Initial_Beginning (){
    document.querySelector('.btn').style.opacity = 0;
    document.querySelector('.by-level').style.opacity = 1;
    document.querySelector('.by-level').style.transform = "translate(150px, 130px)";
    document.querySelector('.by-topic').style.opacity = 1;
    document.querySelector('.by-topic').style.transform = "translate(-150px, 130px)";
}
function disp(Element){
    Element.style.opacity = '1';
}
function Start_by_level(){
    document.querySelector('.by-level').style.opacity = 0;
    document.querySelector('.by-topic').style.opacity = 0;
    levels.forEach((Element) => {
       setTimeout(disp(Element), 1500);
    });
}

