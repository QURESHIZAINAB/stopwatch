let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const display = document.getElementById('display');

function updateDisplay() {
    // Format the time to always have two digits
    const format = (num) => num.toString().padStart(2, '0');
    display.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}:${format(Math.floor(milliseconds / 10))}`;
}

function startTimer() {
    timer = setInterval(() => {
        milliseconds += 10; // Increase milliseconds by 10ms
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10); // Update every 10 milliseconds
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours= 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Initialize display
updateDisplay();