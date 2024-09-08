  window.onload = function () {
    const savedBare = localStorage.getItem('bare');
    const savedOption = localStorage.getItem('bareOption');

    if (savedOption) {
      document.getElementById('bareSelect').value = savedOption;
      if (savedOption === 'custom') {
        document.getElementById('customBareInputContainer').style.display = 'block';
        if (savedBare) {
          document.getElementById('customBareInput').value = savedBare;
        }
      }
    }
  };

  function updateBare() {
    const select = document.getElementById('bareSelect');
    const selectedOption = select.value;

    if (selectedOption === 'custom') {
      document.getElementById('customBareInputContainer').style.display = 'block';
    } else {
      document.getElementById('customBareInputContainer').style.display = 'none';
      localStorage.setItem('bare', selectedOption);
      localStorage.setItem('bareOption', selectedOption);
      updateProxyConfig(selectedOption);
    }
  }

  function saveCustomBare() {
    const customBare = document.getElementById('customBareInput').value.trim();
    if (!customBare) {
      alert('Please enter a valid bare link.');
      return;
    }

    localStorage.setItem('bare', customBare);
    localStorage.setItem('bareOption', 'custom');
    updateProxyConfig(customBare);
    alert('Custom bare URL saved successfully!');
  }

  function updateProxyConfig(bareUrl) {

    self.__uv$config.bare = bareUrl;
    console.log('Proxy bare URL updated to:', bareUrl);
  }
