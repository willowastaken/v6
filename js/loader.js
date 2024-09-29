document.addEventListener("DOMContentLoaded", function() {

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

    const randomText = texts[Math.floor(Math.random() * texts.length)];

    const randomTextElement = document.createElement('p');
    randomTextElement.textContent = randomText;
    randomTextElement.id = 'random-text'; 

    const loader = document.getElementById('loader');
    loader.appendChild(randomTextElement);

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
