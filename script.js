// Toggle between light and dark mode
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function () {
  const isDarkMode = body.getAttribute('data-theme') === 'dark';
  if (isDarkMode) {
    body.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = 'Switch to Light Mode';
  }
});

// Display real-time clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);