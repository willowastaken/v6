document.getElementById('searchInput').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  let boxes = document.getElementById('boxContainer').getElementsByClassName('box');

  for (let i = 0; i < boxes.length; i++) {
    let boxText = boxes[i].getElementsByClassName('box-text')[0].textContent.toLowerCase();

    if (boxText.includes(filter)) {
      boxes[i].style.display = "";
    } else {
      boxes[i].style.display = "none";
    }
  }
});
