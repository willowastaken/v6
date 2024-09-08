function add() {
            let link = prompt("Enter the link (must start with https://)");
            if (!link.startsWith('https://')) {
                link = 'https://' + link;
            }

            const imageLink = prompt("Enter the image link");
            const name = prompt("Enter the name");

            const shortcut = document.createElement('div');
            shortcut.className = 'circle-container';

            const shortcutLink = document.createElement('a');
            shortcutLink.href = `/static/embed.html#${encodeURIComponent(link)}`;
            shortcutLink.className = 'circle';

            const img = document.createElement('img');
            img.src = imageLink;
            img.alt = name;

            const textDiv = document.createElement('div');
            textDiv.className = 'circle-text';
            textDiv.innerText = name;

            const removeButton = document.createElement('div');
            removeButton.className = 'remove-btn';
            removeButton.innerHTML = '<img src="/images/proxy-images/x.png">'; 
            removeButton.onclick = () => remove(name);

            shortcutLink.appendChild(img);
            shortcutLink.appendChild(textDiv);

            shortcut.appendChild(shortcutLink);
            shortcut.appendChild(removeButton);

            const shortcutsContainer = document.getElementById('shortcuts');
            shortcutsContainer.insertBefore(shortcut, shortcutsContainer.firstChild);

            saveShortcut(link, imageLink, name);
        }

        function saveShortcut(link, imageLink, name) {
            const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
            shortcuts.push({ link, imageLink, name });
            localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
        }

        function remove(name) {
            let shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
            shortcuts = shortcuts.filter(shortcut => shortcut.name !== name);
            localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
            loadShortcuts(); 
        }

        function loadShortcuts() {
            const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
            const shortcutsContainer = document.getElementById('shortcuts');
            shortcutsContainer.innerHTML = '';  

            shortcuts.forEach(shortcut => {
                const shortcutElement = document.createElement('div');
                shortcutElement.className = 'circle-container';

                const shortcutLink = document.createElement('a');
                shortcutLink.href = `/static/embed.html#${encodeURIComponent(shortcut.link)}`;
                shortcutLink.className = 'circle';

                const imgElement = document.createElement('img');
                imgElement.src = shortcut.imageLink;
                imgElement.alt = shortcut.name;

                const textDiv = document.createElement('div');
                textDiv.className = 'circle-text';
                textDiv.innerText = shortcut.name;

                const removeButton = document.createElement('div');
                removeButton.className = 'remove-btn';
                removeButton.innerHTML = '<img src="/images/proxy-images/x.png">';
                removeButton.onclick = () => remove(shortcut.name);

                shortcutLink.appendChild(imgElement);
                shortcutLink.appendChild(textDiv);

                shortcutElement.appendChild(shortcutLink);
                shortcutElement.appendChild(removeButton);

                shortcutsContainer.appendChild(shortcutElement);
            });
        }

        window.onload = loadShortcuts;
