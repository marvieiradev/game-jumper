const player = document.querySelector('.player');
const spikes = document.querySelector('.spikes');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const scoreTxt = document.querySelector('.score');
const hiScoreTxt = document.querySelector('.hi-score');
const btRestart = document.getElementById('bt-restart');
var points = 0;
const hiScore = Number(localStorage.getItem("hi-score")) || 0;
const jump = () => {
    player.classList.add('jump');
    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

const gameLoop = setInterval(() => {
    const spikesPosition = spikes.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    points += 1;
    var score = Math.round(points / 100)
    if (spikesPosition <= 110 && spikesPosition > 0 && playerPosition < 80) {
        spikes.style.animation = 'none';
        spikes.style.left = `${spikesPosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = './images/game-over.png';

        clouds.style.left = `${cloudsPosition}px`;
        clouds.style.animation = 'none';

        gameOver.style.display = 'flex';

        if (score >= hiScore) {
            hiScore = score
        }
        localStorage.setItem("hi-score", hiScore);

        clearInterval(gameLoop);
    }
    scoreTxt.innerText = score.toString().padStart(5, '0');
    hiScoreTxt.innerText = "HI " + hiScore.toString().padStart(5, '0');
}, 10);

btRestart.addEventListener('click', () => {
    window.location.reload(true)
});

document.addEventListener('keydown', jump);