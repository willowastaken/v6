document.addEventListener("DOMContentLoaded", function() {
    // Array of random texts
    const texts = [
        "Loading the best experience...",
        "Preparing your content...",
        "Almost there...",
        "Hang tight, we're setting things up...",
        "Just a moment, making everything perfect...",
        "Optimizing your journey...",
        "Getting ready for launch...",
        "Final touches are being made...",
        "Patience is a virtue, good things are coming...",
        "Hold on tight, magic is happening..."
    ];

    // Select a random text from the array
    const randomText = texts[Math.floor(Math.random() * texts.length)];

    // Dynamically create the <p> element for random text
    const randomTextElement = document.createElement('p');
    randomTextElement.textContent = randomText;
    randomTextElement.id = 'random-text';  // Give it an ID for styling

    // Append the randomTextElement to the loader
    const loader = document.getElementById('loader');
    loader.appendChild(randomTextElement);

    // Add text after the loader bars have loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loader = document.getElementById('loader');
            loader.classList.add('fade-out');

            loader.addEventListener('transitionend', function() {
                loader.style.display = 'none';
                document.getElementById('content').style.display = 'block';
            });
        }, 1000);
    });
});
