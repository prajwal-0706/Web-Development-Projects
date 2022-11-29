const buttons = document.querySelectorAll('button')

for(button of buttons){
    button.addEventListener('click',(e) => {
        const abc = e.target.innerText;

        console.log(abc);
        playmusic(abc);

        
    })
       
}
document.addEventListener('keypress',(e) => {
    const abc = e.key;
    playmusic(abc);
    console.log(abc)
});

function playmusic(abc){
    switch (abc){
        case 'w':
            var audio = new Audio('/sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('/sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('/sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('/sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('/sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('/sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('/sounds/snare.mp3');
            audio.play();
            break;
    }
}


