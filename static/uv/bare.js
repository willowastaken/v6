  let uvConfig = {
    prefix: '/static/pa/',
    bare: 'https://bonkerbankers-xyz.onrender.com/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
  };

  window.onload = function () {
    const savedBare = localStorage.getItem('bare');
    const savedOption = localStorage.getItem('bareOption');

    if (savedOption) {
      document.getElementById('bareSelect').value = savedOption;
      if (savedOption === 'custom' && savedBare) {
        uvConfig.bare = savedBare;
      } else if (savedOption) {
        uvConfig.bare = savedOption;
      }
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
        uvConfig.bare = customBare;
        alert('Custom bare URL saved successfully!');
      } else {
        alert('Please enter a valid URL.');
        select.value = 'custom'; 
      }
    } else {
      localStorage.setItem('bare', selectedOption);
      localStorage.setItem('bareOption', selectedOption);
      uvConfig.bare = selectedOption;
    }
    console.log('Updated configuration:', uvConfig);
  }

  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

