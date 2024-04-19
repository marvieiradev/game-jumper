const player = document.querySelector('.player');
const pipe = document.querySelector('.pipe');

const jump = () => {
    player.classList.add('jump');
    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);
}

const gameLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && playerPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;
    }
}, 10)

document.addEventListener('keydown', jump);