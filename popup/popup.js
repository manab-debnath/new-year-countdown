// popup/popup.js remains the same as before
function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
  const difference = newYear.getTime() - now.getTime();

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    updateTimeUnit("days", days);
    updateTimeUnit("hours", hours);
    updateTimeUnit("minutes", minutes);
    updateTimeUnit("seconds", seconds);
  }
}

function updateTimeUnit(id, value) {
  const element = document.getElementById(id);
  const currentValue = element.textContent;
  const newValue = value.toString().padStart(2, "0");

  if (currentValue !== newValue) {
    element.textContent = newValue;
    element.classList.remove("animate");
    void element.offsetWidth; // Trigger reflow
    element.classList.add("animate");
  }
}

// Update immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
