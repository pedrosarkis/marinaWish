document.getElementById('yes').addEventListener('click', () => {
    const video = document.getElementById('video')
    video.style.display = 'block'
    document.getElementsByClassName('child')[0].style.display = 'none'
    video.play()
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari e Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
})

function makeElementMove() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
 
    this.style.left = x + 'px';
    this.style.top = y + 'px';
}

document.getElementById('no').addEventListener('mouseover', makeElementMove)

//Fazendo o evento no click porque no mobile não tem hover
document.getElementById('no').addEventListener('click', makeElementMove)