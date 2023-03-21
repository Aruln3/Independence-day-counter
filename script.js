var countdownEl = document.getElementById('countdown-text');
var count = 10;

function countdown() {
  countdownEl.innerHTML = count;
  count--;
  if (count < 0) {
    clearInterval(countdownInterval);
    countdownEl.style.display = 'none';
    var imageContainer = document.querySelector('.image');
    imageContainer.style.display = 'block';
  }
}

var countdownInterval = setInterval(countdown, 1000);
