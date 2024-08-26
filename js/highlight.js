const style = document.createElement('style');
style.innerHTML = `
    ::selection {
        background-color: #b03232;
        color: white; 
    }
`;
document.head.appendChild(style);