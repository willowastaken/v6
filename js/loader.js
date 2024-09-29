document.addEventListener("DOMContentLoaded", function() {
    const texts = [
     "Bringing your adventure alive...",
     "Setting up your experience...",
     "Loading awesome features...",
     "Preparing a smooth journey...",
     "Hang tight, almost ready!",
     "Crafting something special...",
     "i like pee c'z...",
     "Just a moment, please wait...",
     "Eryx is a MONKEY who cant even use Jujutsu",
     "Launching great content...",
     "Jeremy Is Washed On GD...",
     "Making things just right...",
     "Unblocking your experience...",
     "Hang on, it’s almost done!",
     "Loading your custom settings...",
     "Building your experience...",
     "Just a moment, hang tight...",
     "Getting everything in place...",
     "Almost there, stay tuned...",
     "Hakari Mains Needa Hop Off & Shower...",
     "We're on it, just a sec...",
     "Loading the latest updates...",
     "Hang tight, enjoy the wait!",
     "Crafting your unique journey...",
     "Almost ready to dive in!",
     "Creating your experience...",
     "Loading new possibilities...",
     "Getting ready for your fun...",
     "Hang on, magic in progress...",
     "Just a moment, good things!"
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
