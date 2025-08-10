let colorInterval = null;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('startBtn').addEventListener('click', function () {
    if (colorInterval) return; // Prevent multiple intervals

    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 500);

    this.disabled = true;
    document.getElementById('stopBtn').disabled = false;
});

document.getElementById('stopBtn').addEventListener('click', function () {
    clearInterval(colorInterval);
    colorInterval = null;

    this.disabled = true;
    document.getElementById('startBtn').disabled = false;
});
