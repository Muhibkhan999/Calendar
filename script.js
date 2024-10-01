function updateClock() {
    var now = new Date();

    // Get hours, minutes, seconds, and date components
    var hours = now.getHours();  
    var minutes = now.getMinutes();  
    var seconds = now.getSeconds();  
    var day = now.getDate(); // Get the current day
    var month = now.getMonth() + 1; // Get the current month (0-indexed)
    var year = now.getFullYear(); // Get the current year

    var period;
    if (hours >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    // Convert to 12-hour format
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    // Add a leading 0 if necessary
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    // Create the time and date strings
    var timeString = hours + ":" + minutes + ":" + seconds + " " + period;
    var dateString = month + "/" + day + "/" + year; // Format date as MM/DD/YYYY

    // Display the time and date in the clock div
    document.getElementById('clock').innerHTML = timeString + "<br>" + dateString;

    // Update the clock every second
    setTimeout(updateClock, 1000);
}

// Start the clock when the page loads
updateClock();