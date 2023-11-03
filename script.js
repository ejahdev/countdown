function updateTimer() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    const targetHourPM = 16; // 4 PM
    const targetHourAM = 4;  // 4 AM
    const targetMinute = 20;

    let targetHour, message;

    if (currentHour > targetHourPM || (currentHour === targetHourPM && currentMinutes > targetMinute)) {
        targetHour = targetHourAM;
        message = `AM`;
    } else if (currentHour < targetHourAM || (currentHour === targetHourAM && currentMinutes < targetMinute)) {
        targetHour = targetHourAM;
        message = `AM`;
    } else {
        targetHour = targetHourPM;
        message = `PM`;
    }

    let hoursRemaining = targetHour - currentHour;
    let minutesRemaining = currentMinutes > targetMinute
        ? 60 - currentMinutes + targetMinute
        : targetMinute - currentMinutes;
    let secondsRemaining = 60 - currentSeconds;

    if (minutesRemaining === 60) {
        minutesRemaining = 0;
        hoursRemaining -= 1;
    }

    if (hoursRemaining < 0) {
        hoursRemaining += 24;
    }

    let countdownText = `${hoursRemaining > 0 ? `<span id="hours" class="countdown-num">${hoursRemaining}</span> hour${hoursRemaining > 1 ? 's ' : ' '}` : ''}${minutesRemaining > 0 ? `<span id="minutes" class="countdown-num">${minutesRemaining}</span> minute${minutesRemaining === 1 ? ' ' : 's '}` : ''}<span id="seconds" class="countdown-num">${secondsRemaining}</span> second${secondsRemaining === 1 ? ' ' : 's '}`;

    if (currentHour === targetHour && currentMinutes === targetMinute) {
        countdownText = `<span class="time-text">CHEERS Happy 4:20 ${message}</span>`;
    }

    document.getElementById('countdown').innerHTML = countdownText + `<br>Until West Coast <span class="time-text">4:20</span> ${message}!`;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
