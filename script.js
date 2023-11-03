function updateTimer() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();

    // Set the target hours for 4:20 AM and 4:20 PM
    const targetHourAM = 4;
    const targetHourPM = 16;
    const targetMinute = 20;

    // Calculate the time until the next 4:20
    let targetHour, message;

    if (currentHour > targetHourPM || (currentHour === targetHourPM && currentMinutes > targetMinute)) {
        targetHour = targetHourAM;
        message = `till 4:20 AM!`;
    } else if (currentHour < targetHourAM || (currentHour === targetHourAM && currentMinutes <= targetMinute)) {
        targetHour = targetHourAM;
        message = `till 4:20 AM!`;
    } else {
        targetHour = targetHourPM;
        message = `till 4:20 PM!`;
    }

    const timeDiff = (targetHour - currentHour) * 3600000 + (targetMinute - currentMinutes) * 60000 - currentSeconds * 1000;

    const hoursRemaining = Math.floor(timeDiff / 3600000);
    const minutesRemaining = Math.floor((timeDiff % 3600000) / 60000);
    const secondsRemaining = Math.floor((timeDiff % 60000) / 1000);

    const countdownText = `${hoursRemaining > 0 ? `<span id="hours" class="countdown-num" style="color: #6441A5">${hoursRemaining}</span> hour${hoursRemaining > 1 ? 's ' : ' '}` : ''}${minutesRemaining > 0 ? `<span id="minutes" class="countdown-num" style="color: #6441A5">${minutesRemaining}</span> minute${minutesRemaining === 1 ? ' ' : 's '}` : ''}<span id="seconds" class="countdown-num" style="color: #6441A5">${secondsRemaining}</span> second${secondsRemaining === 1 ? ' ' : 's '}<br> till West Coast <span class="time-text">4:20</span>!`;

    if (currentHour === targetHour && currentMinutes === targetMinute) {
        countdownText = `CHEERS Happy 4:20!!`;
    }

    document.getElementById('countdown').innerHTML = countdownText;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
