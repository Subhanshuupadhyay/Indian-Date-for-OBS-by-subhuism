<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="scripts.js"></script>


function updateTime() {
  const now = moment();
  
  // Update clock elements
  document.documentElement.style.setProperty('--timer-day', "'" + now.format("dd") + "'");
  document.documentElement.style.setProperty('--timer-date', "'" + now.format("MMM D, YYYY") + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + now.format("k") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + now.format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + now.format("ss") + "'");
  
  requestAnimationFrame(updateTime);
}

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
});
