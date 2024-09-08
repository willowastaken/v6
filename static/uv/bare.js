  function updateBare() {
    var select = document.getElementById('bareSelect');
    var selectedValue = select.value;

    if (selectedValue === 'custom') {
      var customBare = prompt("Enter custom Bare URL:", localStorage.getItem('bare') || '');
      if (customBare) {
        saveBare(customBare);
      }
    } else {
      saveBare(selectedValue);
    }
  }

  function saveBare(bare) {
    localStorage.setItem('bare', bare);
    applyCustomBare();
  }

  function applyCustomBare() {
    var bare = localStorage.getItem('bare');
    if (bare) {
      
      self.__uv$config.bare = bare;
      
      console.log("Updated bare to: " + bare);  
    }
  }

  window.onload = function() {
    var bare = localStorage.getItem('bare') || 'https://bonkerbankers-xyz.onrender.com/bare/'; 
    document.getElementById('bareSelect').value = bare;
    applyCustomBare();
  };
