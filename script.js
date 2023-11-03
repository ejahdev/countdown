function updateTimer() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();

    // Set the target hour and minute for West Coast 4:20 (16:20)
    const targetHour = 16 && 4; // 4 PM
    const targetMinute = 20;

    // Calculate the time difference in hours, minutes, and seconds
    let hoursRemaining, minutesRemaining, secondsRemaining;

    if (currentHour > targetHour || (currentHour === targetHour && currentMinutes > targetMinute)) {
        // If the current time has already passed 4:20 PM, calculate the time until the next day's 4:20 PM
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        tomorrow.setHours(targetHour, targetMinute, 0, 0);

        const timeDiff = tomorrow - now;
        hoursRemaining = Math.floor(timeDiff / 3600000);
        minutesRemaining = Math.floor((timeDiff % 3600000) / 60000);
        secondsRemaining = Math.floor((timeDiff % 60000) / 1000);
    } else {
        // Calculate the time until today's 4:20 PM
        const targetTime = new Date(now);
        targetTime.setHours(targetHour, targetMinute, 0, 0);

        const timeDiff = targetTime - now;
        hoursRemaining = Math.floor(timeDiff / 3600000);
        minutesRemaining = Math.floor((timeDiff % 3600000) / 60000);
        secondsRemaining = Math.floor((timeDiff % 60000) / 1000);
    }

    // Apply the purple color to the countdown numbers
    const purple = "#6441A5";
    const yellowGreen = "#A7E10D";

    let countdownText = '';

    if (hoursRemaining > 0) {
        countdownText += `<span id="hours" class="countdown-num" style="color: ${purple}">${hoursRemaining}</span> hour${hoursRemaining > 1 ? 's ' : ' '}`;
        if (minutesRemaining > 0 || secondsRemaining > 0) {
            countdownText += ' ';
        }
    }

    if (minutesRemaining > 0) {
        countdownText += `<span id="minutes" class="countdown-num" style="color: ${purple}">${minutesRemaining}</span> minute${minutesRemaining === 1 ? ' ' : 's '}`;
        if (hoursRemaining > 0 && secondsRemaining > 0) {
            countdownText += ' ';
        }
    }

    countdownText += `<span id="seconds" class="countdown-num" style="color: ${purple}">${secondsRemaining}</span> second${secondsRemaining === 1 ? ' ' : 's '}`;

    countdownText += `<br> till West Coast <span class="time-text">4:20</span>!`;

    if (currentHour === targetHour && currentMinutes === targetMinute) {
        countdownText = `CHEERS Happy 4:20!!`;
    }

    document.getElementById('countdown').innerHTML = countdownText;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
