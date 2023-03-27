

for (var i = 0; i < 3; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function () {
        var text = this.innerHTML;
        console.log(text);
        playaudio(text);
        playanim(text);


    })
};

function playaudio(text) {
    switch (text) {
        case 'a':
            let audio = new Audio('song/8.mp3');
            audio.play();
            break;
            
        case 'b':
            let audio1 = new Audio('song/9.mp3');
            audio1.play();
            audio1.volume = 0.3;
            break;
            audio1.pause();
        
        case 'c':
            let audio2 = new Audio('song/10.mp3');
            audio2.play();
            audio2.volume = 0.3;
            break;
    }
}



function playanim(text) {
    var selectedButton = document.querySelector('.' + text);
    selectedButton.classList.add('anim');

    setTimeout(function () {
    
        var selectedButton = document.querySelector('.' + text);
        selectedButton.classList.remove('anim');
    }, 1000);
};

