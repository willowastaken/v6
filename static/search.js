document.getElementById('uv-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    
    // Show loader
    document.getElementById('loader').style.display = 'block';
    
    // Fetch the URL from the input field
    const input = document.getElementById('uv-address').value;
    const searchEngine = document.getElementById('uv-search-engine').value;

    // Use the search function to create a fully qualified URL or search query
    const targetUrl = search(input, searchEngine);
    
    // Create an iframe to display the search result or URL
    const iframe = document.createElement('iframe');
    iframe.src = targetUrl;
    iframe.style.width = '100%';
    iframe.style.height = '600px'; // Adjust height as needed
    
    // When the iframe is loaded, hide the loader
    iframe.onload = function() {
        document.getElementById('loader').style.display = 'none';
    };
    
    // Append the iframe to the container on the page
    const container = document.querySelector('.container');
    container.appendChild(iframe);
    
    // Optionally, reset the input field
    document.getElementById('uv-address').value = '';
});
