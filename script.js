const player = document.querySelector('.player');
const spikes = document.querySelector('.spikes');
const clouds = document.querySelector('.clouds');

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

    if (spikesPosition <= 110 && spikesPosition > 0 && playerPosition < 80) {
        spikes.style.animation = 'none';
        spikes.style.left = `${spikesPosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = './images/game-over.png';

        clouds.style.left = `${cloudsPosition}px`;
        clouds.style.animation = 'none';

        clearInterval(gameLoop);
    }
}, 10)

document.addEventListener('keydown', jump);