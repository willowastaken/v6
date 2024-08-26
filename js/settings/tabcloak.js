function handleClick(box, tabName, favicon) {
box.classList.add('clicked');
document.title = tabName;
const faviconLink = document.querySelector("link[rel*='icon']");
faviconLink.href = favicon;
localStorage.setItem('tabName', tabName);
localStorage.setItem('favicon', favicon);
setTimeout(() => {
    box.classList.remove('clicked');
}, 500);
}

function resetCloak() {
const originalTabName = '';
const originalFavicon = '/plexilearcade.png';
document.title = originalTabName;
const faviconLink = document.querySelector("link[rel*='icon']");
faviconLink.href = originalFavicon;
localStorage.setItem('tabName', originalTabName);
localStorage.setItem('favicon', originalFavicon);
}

window.addEventListener('DOMContentLoaded', () => {
const savedTabName = localStorage.getItem('tabName');
const savedFavicon = localStorage.getItem('favicon');
if (savedTabName && savedFavicon) {
    document.title = savedTabName;
    const faviconLink = document.querySelector("link[rel*='icon']");
    faviconLink.href = savedFavicon;
}
});