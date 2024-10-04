// True Fact: This SHI TOOK ME 3 STRAIGHT HOURS OF TORTURE TO FINALLY GET IT TO WORK!
var url = "/";  
var win;
var autoAboutBlankEnabled = false; 

function openWindow() {
    if (win && !win.closed) {
        win.focus();
    } else {
        win = window.open('', '_blank');
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }
}

if (window.location.href === 'about:blank') {
    autoAboutBlankEnabled = false; 
}

if (localStorage.getItem('autoAboutBlankEnabled') === 'true') {
    autoAboutBlankEnabled = true; 
}

document.addEventListener('DOMContentLoaded', function() {
    let ctrlAPressed = false;
    let ctrlBPressed = false;

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey) {
            if (event.key === 'a') {
                ctrlAPressed = true;
                event.preventDefault();
            }

            if (event.key === 'b') {
                ctrlBPressed = true;
                event.preventDefault();
            }

            if (ctrlAPressed && ctrlBPressed) {
                autoAboutBlankEnabled = !autoAboutBlankEnabled;

                if (autoAboutBlankEnabled) {
                    localStorage.setItem('autoAboutBlankEnabled', 'true');
                    alert("Auto About:Blank Enabled");
                } else {
                    localStorage.removeItem('autoAboutBlankEnabled'); 
                    alert("Auto About:Blank Disabled");
                }
                ctrlAPressed = false;
                ctrlBPressed = false;
            }
        }

        if (!event.ctrlKey) {
            ctrlAPressed = false;
            ctrlBPressed = false;
        }
    });

    if (autoAboutBlankEnabled && window.location.href !== 'about:blank') {
        
        if (!win || win.closed) {
            openWindow();
            window.location.href = "https://www.google.com/search?q=schoology"; 
        }
    }
});
