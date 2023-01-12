const Level = document.querySelector('.by-level');
const Topic = document.querySelector('.by-topic');
const Start = document.querySelector('.btn');
const levels = document.querySelectorAll('.level-1');


Start.addEventListener('click', Initial_Beginning)
Level.addEventListener('click',Start_by_level );
Topic.addEventListener('click', Start_by_level);

function Initial_Beginning (){
    document.querySelector('.btn').style.opacity = 0;
    document.querySelector('.btn').style.zIndex = -1;
    document.querySelector('.by-level').style.opacity = 1;
    document.querySelector('.by-level').style.transform = "translate(150px, 130px)";
    document.querySelector('.by-topic').style.opacity = 1;
    document.querySelector('.by-topic').style.transform = "translate(-150px, 130px)";

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
    for(let i = 0 ; i< 15 ; i++){
        await delay(100);
        let div = document.createElement('div');
        div.className = "level-content";
        div.textContent = `Level ${i+1}`;
        document.getElementById('class').appendChild(div);
    }
}

