function updateTimer() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();

    // Set the target hours for 4:20 AM and 4:20 PM
    const targetHourAM = 4;
    const targetHourPM = 16;
    const targetMinute = 20;

    let targetHour, message;

    if (currentHour > targetHourPM || (currentHour === targetHourPM && currentMinutes > targetMinute)) {
        // If it's past 4:20 PM, calculate the time until 4:20 AM of the next day
        targetHour = targetHourAM;
        message = `till 4:20 AM!`;
    } else if (currentHour < targetHourAM || (currentHour === targetHourAM && currentMinutes <= targetMinute)) {
        // If it's before 4:20 AM, calculate the time until 4:20 AM of today
        targetHour = targetHourAM;
        message = `till 4:20 AM!`;
    } else {
        // If it's between 4:20 AM and 4:20 PM, calculate the time until 4:20 PM of today
        targetHour = targetHourPM;
        message = `till 4:20 PM!`;
    }

    // Calculate the time difference in milliseconds
    const targetTime = new Date(now);
    targetTime.setHours(targetHour, targetMinute, 0, 0);
    const timeDiff = targetTime - now;

    // If the time difference is negative, it means it's already past the target time, so we need to adjust for the next occurrence
    if (timeDiff < 0) {
        targetTime.setDate(targetTime.getDate() + 1);
        timeDiff = targetTime - now;
    }

    const hoursRemaining = Math.floor(timeDiff / 3600000);
    const minutesRemaining = Math.floor((timeDiff % 3600000) / 60000);
    const secondsRemaining = Math.floor((timeDiff % 60000) / 1000);

    const countdownText = `${hoursRemaining > 0 ? `<span id="hours" class="countdown-num" style="color: #6441A5">${hoursRemaining}</span> hour${hoursRemaining > 1 ? 's ' : ' '}` : ''}${minutesRemaining > 0 ? `<span id="minutes" class "countdown-num" style="color: #6441A5">${minutesRemaining}</span> minute${minutesRemaining === 1 ? ' ' : 's '}` : ''}<span id="seconds" class="countdown-num" style="color: #6441A5">${secondsRemaining}</span> second${secondsRemaining === 1 ? ' ' : 's '}<br> till West Coast <span class="time-text">4:20</span>!`;

    if (currentHour === targetHour && currentMinutes === targetMinute) {
        countdownText = `CHEERS Happy 4:20!!`;
    }

    document.getElementById('countdown').innerHTML = countdownText;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
