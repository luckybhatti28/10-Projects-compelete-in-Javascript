const newYears = "1 Jan 2022";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours'); 
const minsEl = document.getElementById('mins');
const SecondsEl = document.getElementById('seconds');

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor( currentDate -newYearDate ) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    SecondsEl.innerHTML = seconds;
}

// initial call 
countdown();

setInterval(countdown, 1000);