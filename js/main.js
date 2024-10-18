window.onload = function() {
    
    const fogContainer = document.createElement('div');
    fogContainer.classList.add('fog-container');

    for (let i = 1; i <= 3; i++) {
        const fog = document.createElement('div');
        fog.classList.add('fog');

        if (i === 1) {
            fog.style.top = '10%';
            fog.style.left = '15%';
            fog.style.width = '400px';
            fog.style.height = '400px';
        } else if (i === 2) {
            fog.style.top = '45%';
            fog.style.left = '60%';
            fog.style.width = '350px';
            fog.style.height = '350px';
        } else if (i === 3) {
            fog.style.top = '80%';
            fog.style.left = '30%';
            fog.style.width = '500px';
            fog.style.height = '500px';
        }

        fogContainer.appendChild(fog);
    }

    document.body.appendChild(fogContainer);
};
