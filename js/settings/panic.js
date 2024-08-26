function getPanicKey() {
  return localStorage.getItem('panicKey') || '=';
}

function openPopup() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
  setTimeout(() => {
      document.getElementById("overlay").style.opacity = "0.5";
      document.getElementById("popup").style.opacity = "1";
  }, 10);
}

function closePopup() {
  document.getElementById("overlay").style.opacity = "0";
  document.getElementById("popup").style.opacity = "0";
  setTimeout(() => {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("popup").style.display = "none";
  }, 300);
}

function savePanicKey() {
  let newKey = document.getElementById("panicKeyInput").value;
  let newURL = document.getElementById("urlInput").value;
  if (newURL.trim() !== "") {
      localStorage.setItem('panicURL', newURL); 
  }
  if (newKey.length === 1) {
      localStorage.setItem('panicKey', newKey);
      document.getElementById("panicKeyDisplay").innerText = newKey;
      closePopup();
  } else if (newKey.trim() !== "") {
      alert("Please enter a single character as the panic key.");
  } else {
      closePopup();
  }
}

function resetTab() {
  let panicURL = localStorage.getItem('panicURL');
  if (panicURL) {

      if (!panicURL.startsWith("http://") && !panicURL.startsWith("https://")) {

          panicURL = "https://" + panicURL;
      }
      window.location.href = panicURL; 
  } else {

      window.location.href = "https://google.com";
  }
}

document.addEventListener('keydown', function(event) {
  let panicKey = getPanicKey();
  if (event.key === panicKey) {
      resetTab();
  }
});

window.onload = function() {
  let panicKey = getPanicKey();
  document.getElementById("panicKeyDisplay").innerText = panicKey;
};