  window.onload = function () {
    const savedBare = localStorage.getItem('bare');
    const savedOption = localStorage.getItem('bareOption');

    if (savedOption) {
      document.getElementById('bareSelect').value = savedOption;
    }
  };

  function updateBare() {
    const select = document.getElementById('bareSelect');
    const selectedOption = select.value;

    if (selectedOption === 'custom') {
      const customBare = prompt('Enter custom bare link:');
      if (customBare && isValidUrl(customBare)) {
        localStorage.setItem('bare', customBare);
        localStorage.setItem('bareOption', 'custom');
        applyCustomBare(customBare);
        alert('Custom bare URL saved successfully!');
      } else {
        alert('Please enter a valid URL.');
        select.value = 'custom'; 
      }
    } else {
      localStorage.setItem('bare', selectedOption);
      localStorage.setItem('bareOption', selectedOption);
      applyCustomBare(selectedOption);
    }
  }

  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  function applyCustomBare(bareUrl) {
    if (self.__uv$config) {
      self.__uv$config.bare = bareUrl;
      console.log('Updated bare URL:', bareUrl);

      location.reload();
    } else {
      console.log('Ultraviolet config not available.');
    }
  }
