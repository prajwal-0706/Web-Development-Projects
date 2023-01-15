const Level = document.querySelector('.by-level');
const Topic = document.querySelector('.by-topic');
const Start = document.querySelector('.btn');
const levels = document.querySelectorAll('.level-1');
const heading = document.querySelector('.head');
let lev;


Start.addEventListener('click', Initial_Beginning)
Level.addEventListener('click',Start_by_level );
Topic.addEventListener('click', Start_by_level);

function Initial_Beginning (){
    document.querySelector('.btn').style.opacity = 0;
    document.querySelector('.btn').style.zIndex = -1;
    document.querySelector('.by-level').style.opacity = 1;
    document.querySelector('.by-level').style.transform = "translate(200px, 130px)";
    document.querySelector('.by-topic').style.opacity = 1;
    document.querySelector('.by-topic').style.transform = "translate(-250px, 130px)";

}
function disp(Element){
    Element.style.opacity = '1';
}
function Start_by_level(){
    document.querySelector('.by-topic').style.opacity = '0';
    document.querySelector('.by-level').style.opacity = '0';
    document.querySelector('.by-level').style.zIndex = -'1';
    document.querySelector('.by-topic').style.zIndex = -'1';    
    setTimeout(buildblocks, 1500);
}

levels.forEach((element) => {
    element.addEventListener('click', () =>{
        levels.forEach((e) => {
            e.style.opacity = '0';
            e.style.zIndex = '-1';
        });
    });
})

const delay = ms => new Promise( res => setTimeout(res, ms));

const buildblocks = async () => {
    heading.style.transform = 'translate(0px, -100px)';
    for(let i = 0 ; i< 14 ; i++){
        await delay(50);
        let div = document.createElement('div');
        div.className = "level-content";
        if( i < 9){
            div.textContent = `Level 0${i+1}`;
        }else{
            div.textContent = `Level ${i+1}`;
        }

        document.getElementById('class').appendChild(div);    
    }
    lev = document.querySelectorAll('.level-content');
    lev.forEach((ele) =>{
        ele.addEventListener('click', () =>{
            clear(ele);
            Displayque();

        });
    })
}

function Displayque(){
    document.querySelector('img').style.opacity = '1';
    document.querySelector('img').style.zIndex = '1';
    document.querySelectorAll('.line').forEach((e) => {
        e.style.opacity = '1';
        e.style.zIndex = '1';
        e.style.animationName  = 'lineDesign';
    });
    document.querySelector('.ans-container').style.opacity = '1';
    heading.style.transform = 'translate(0px, -190px)';
    document.querySelector('.display-question').style.opacity = '1';
    document.querySelector('.display-question').style.zIndex = '1';
    document.querySelector('.display-question').style.animation = 'typing 5s steps(30, end), blink-caret .5s step-end infinite';
    setTimeout( "document.querySelector('.display-question').style.borderRight = 'none'", 5500);

}

function clear(element){
    element.style.opacity = '0';
    element.style.zIndex = '-1';

}

