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

    // Construct the countdown message
    let countdownText;
    
    if (minutesRemaining > 0) {
        countdownText = `${minutesRemaining} ${minutesRemaining === 1 ? 'minute' : 'minutes'}`;
        if (secondsRemaining > 0) {
            countdownText += ` and ${secondsRemaining} ${secondsRemaining === 1 ? 'second' : 'seconds'}`;
        }
        countdownText += " left till the next 20";
    } else if (secondsRemaining > 0) {
        countdownText = `${secondsRemaining} ${secondsRemaining === 1 ? 'second' : 'seconds'} left till the next 20`;
        
        if (secondsRemaining === 60) {
            // Apply the zooming animation when there are 60 seconds left
            document.getElementById('countdown').classList.add('zooming');
        } else {
            // Remove the animation when it's not 60 seconds
            document.getElementById('countdown').classList.remove('zooming');
        }
    } else {
        countdownText = "Next 20 is here!";
    }

    // Update the elements by their IDs
    document.getElementById('minutes').textContent = minutesRemaining > 0 ? minutesRemaining : '';
    document.getElementById('seconds').textContent = secondsRemaining > 0 ? secondsRemaining : '';

    document.getElementById('countdown').textContent = countdownText;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer when the page loads
updateTimer();
