const refs = {
    daysArea: document.querySelector('[data-value="days"]'),
    hoursArea: document.querySelector('[data-value="hours"]'),
    minArea: document.querySelector('[data-value="mins"]'),
    secArea: document.querySelector('[data-value="secs"]'),
}


const timer = {
    start() {
        const targetDate = new Date('Jan 01, 2022');
        setInterval(() => {
            const currentDate = Date.now();
            const timerSet = targetDate - currentDate;
            const { days, hours, mins, secs } = newYearTimer(timerSet);
            refs.daysArea.textContent = `${days}`;
            refs.hoursArea.textContent = `${hours}`;
            refs.minArea.textContent = `${mins}`;
            refs.secArea.textContent = `${ secs }`;
        }, 1000);
    }
};

timer.start();
function pad(value) {
    return String(value).padStart(2, '0');
}

function newYearTimer(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
};