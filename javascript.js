function startTimer(duration) {
  var timer = duration * 24 * 60 * 60; // Convert duration to seconds

  var interval = setInterval(function() {
    var days = Math.floor(timer / (24 * 60 * 60)); // Calculate remaining days
    var hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60)); // Calculate remaining hours
    var minutes = Math.floor((timer % (60 * 60)) / 60); // Calculate remaining minutes
    var seconds = Math.floor(timer % 60); // Calculate remaining seconds

    document.getElementById("days").textContent = days + " days";
    document.getElementById("hours").textContent = hours + " hours";
    document.getElementById("minutes").textContent = minutes + " minutes";
    document.getElementById("seconds").textContent = seconds + " seconds";

    if (--timer < 0) {
      clearInterval(interval);
      document.getElementById("days").textContent = "Timer completed!";
    }
  }, 1000); // Update the timer every second
}

// Start the timer for one month (30 days)
startTimer(30);
