let time = 1500;
  let timerInterval;
  const timer = document.querySelector('.Kolo');

  let startBtn = document.querySelector('.Start');
  let resetBtn = document.querySelector('.Reset');

  startBtn.addEventListener("click", function () {
  
        timerInterval = setInterval(updateCountdown, 1000);
      
  });
  
  resetBtn.addEventListener("click", function () {
    
        clearInterval(timerInterval);
        time = 1500;
        updateCountdown();
    
  });

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `${minutes} : ${seconds}`;
    if (time > 0) {
      time--;
    } else {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }
