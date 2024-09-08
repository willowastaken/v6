 window.onload = function () {
    const savedBare = localStorage.getItem('selectedBare') || 'https://bonkerbankers-xyz.onrender.com/bare/'; 
    const customBare = localStorage.getItem('customBare');

    if (savedBare === 'custom' && customBare) {
      document.getElementById('bareSelect').value = 'custom';
      setBare(customBare);
    } else {
      document.getElementById('bareSelect').value = savedBare;
      setBare(savedBare);
    }
  };

  function updateBare() {
    const select = document.getElementById("bareSelect");

    if (select.value === "custom") {
      const customBareUrl = prompt("Enter your custom Bare URL:");
      if (customBareUrl) {
        setBare(customBareUrl);
        localStorage.setItem('selectedBare', 'custom');
        localStorage.setItem('customBare', customBareUrl);
        alert("Custom Bare URL saved successfully!");
      } else {

        select.value = localStorage.getItem('selectedBare') || 'https://bonkerbankers-xyz.onrender.com/bare/';
      }
    } else {
      setBare(select.value);
      localStorage.setItem('selectedBare', select.value);
    }
  }

  function setBare(bareUrl) {
    if (bareUrl) {
      self.__uv$config.bare = bareUrl;
      console.log("Bare URL set to: " + bareUrl); 
    }
  }
