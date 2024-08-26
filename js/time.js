function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
  const secondsFormatted = seconds < 10 ? '0' + seconds : seconds;

  const timeString = `${hours}:${minutesFormatted}:${secondsFormatted} ${ampm}`;
  document.getElementById('timeDisplay').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); 