"use strict";

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const loader = document.getElementById("loader");
const iframe = document.createElement("iframe"); // This will be the container for the proxied page

// Style iframe
iframe.style.width = "100%";
iframe.style.height = "100vh";
iframe.style.border = "none";

// Append the iframe to the body or a container
document.body.appendChild(iframe);

// Function to show the loader
function showLoader() {
    loader.style.display = "block";  // Assuming "block" shows the loader
}

// Function to hide the loader
function hideLoader() {
    loader.style.display = "none";  // Assuming "none" hides the loader
}

/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL
 */
function search(input, template) {
    try {
        // input is a valid URL
        return new URL(input).toString();
    } catch (err) {
        // input was not a valid URL
    }

    try {
        // input is a valid URL when http:// is added
        const url = new URL(`http://${input}`);
        if (url.hostname.includes(".")) return url.toString();
    } catch (err) {
        // input was not a valid URL
    }

    // Treat the input as a search query
    return template.replace("%s", encodeURIComponent(input));
}

// On form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent the form from reloading the page

    const query = search(address.value, searchEngine.value);
    showLoader();  // Show the loader when the search starts
    
    // Load the proxied content into the iframe
    iframe.src = `/static/embed.html#${query}`;
});

// Hide loader when iframe content finishes loading
iframe.addEventListener("load", function () {
    hideLoader();  // Hide the loader once the iframe is loaded
});

