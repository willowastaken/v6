  // Load saved bare URL and selected option on page load
  window.onload = function () {
    const savedBare = localStorage.getItem('bare');
    const savedOption = localStorage.getItem('bareOption');

    if (savedOption) {
      document.getElementById('bareSelect').value = savedOption;
    }
  };

  // Update the bare URL based on the selected option
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
        select.value = 'custom'; // Reset to custom if invalid input
      }
    } else {
      localStorage.setItem('bare', selectedOption);
      localStorage.setItem('bareOption', selectedOption);
      applyCustomBare(selectedOption);
    }
  }

  // Function to check if the URL is valid (basic validation)
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Function to apply the new bare URL to the proxy config
  function applyCustomBare(bareUrl) {
    // Assuming Ultraviolet is using a service worker or similar mechanism
    if (self.__uv$config) {
      self.__uv$config.bare = bareUrl;
      console.log('Updated bare URL:', bareUrl);

      // Reload the page to apply new config
      // You might need to reload or reinitialize Ultraviolet here
      location.reload();
    } else {
      console.log('Ultraviolet config not available.');
    }
  }
