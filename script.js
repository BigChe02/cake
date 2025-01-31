let audio = null;
let isFirstClick = true;

function openCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('open');
    
    document.body.classList.toggle('card-opened');
    if (card.classList.contains('open')) {
        if (isFirstClick) {
            audio = new Audio('sound-effect.mp3');
            audio.loop = false;
            audio.volume = 0.5;
            audio.play();
            isFirstClick = false;
        }
    } else {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        isFirstClick = true;
    }
}