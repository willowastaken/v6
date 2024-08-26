let isLeavePopupEnabled = JSON.parse(localStorage.getItem('leavePopupEnabled'));

if (isLeavePopupEnabled === null) {
    isLeavePopupEnabled = false;
}

window.addEventListener('beforeunload', function (e) {
    if (isLeavePopupEnabled) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.getElementById('toggleLeavePopup').addEventListener('change', function () {
    isLeavePopupEnabled = !isLeavePopupEnabled;
    localStorage.setItem('leavePopupEnabled', JSON.stringify(isLeavePopupEnabled));

    if (isLeavePopupEnabled) {
        alert('Anti-Closing Enabled');
    } else {
        alert('Anti-Closing Disabled');
    }
});

document.getElementById('toggleLeavePopup').checked = isLeavePopupEnabled;