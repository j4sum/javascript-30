function playSound(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running altogether
    audio.currentTime = 0;
    audio.play();
    // console.log(key);
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
//each key has an event listener called transition end and when it ends transition we remove it
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//listen to keydown event and function will give the event
window.addEventListener('keydown', playSound);