function updateTimer() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate minutes and seconds remaining until the next :20 past the hour
    let minutesRemaining;
    let secondsRemaining;

    if (minutes < 20) {
        minutesRemaining = 20 - minutes;
        secondsRemaining = 60 - seconds;
    } else {
        minutesRemaining = 80 - minutes; // 60 (full hour) + 20 - minutes
        secondsRemaining = 60 - seconds;
    }

    // Determine whether to show "minute" or "minutes"
    const minuteLabel = minutesRemaining === 1 ? "minute" : "minutes";

    // Determine whether to show "second" or "seconds"
    const secondLabel = secondsRemaining === 1 ? "second" : "seconds";

    // Apply the purple color to the countdown numbers
    const purple = "#9147FF";
    let countdownText;

    if (minutesRemaining > 1) {
        countdownText = `<span id="minutes" class="orange">${minutesRemaining}</span> <span class="yellow-green">${minuteLabel}</span> <span id="seconds" class="orange">${secondsRemaining}</span> <span class="yellow-green">${secondLabel} left!</span>`;
    } else if (minutesRemaining === 1) {
        countdownText = `<span id="seconds" class="orange">${secondsRemaining}</span> <span class="yellow-green">${secondLabel} left!</span>`;
        if (secondsRemaining === 60) {
            document.getElementById('countdown').classList.add('zooming');
        } else {
            document.getElementById('countdown').classList.remove('zooming');
        }
    } else {
        countdownText = "Next 20 is here!";
    }

    // Update the elements by their IDs
    document.getElementById('countdown').innerHTML = countdownText;
    document.getElementById('minutes').style.color = purple;
    document.getElementById('seconds').style.color = purple;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
