function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
  
    hour = hour % 12;
    hour = hour ? hour : 12; // 0 should be 12
  
    document.getElementById('hour').textContent = hour.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
  }
  
  setInterval(updateClock, 1000);
  updateClock();