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
        updateProxyConfig(customBare);
        alert('Custom bare URL saved successfully!');
      } else {
        alert('Please enter a valid URL.');
        select.value = 'custom'; // Reset to custom if invalid input
      }
    } else {
      localStorage.setItem('bare', selectedOption);
      localStorage.setItem('bareOption', selectedOption);
      updateProxyConfig(selectedOption);
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

  // Function to update the proxy configuration dynamically
  function updateProxyConfig(bareUrl) {
    // Since the config file is static, you would need to reload the page to apply changes
    // For demo purposes, we'll just log the update
    console.log('Proxy bare URL updated to:', bareUrl);
  }
