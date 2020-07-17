function openShare() {
  document.getElementById("share-content").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.shareBtn')) {
    var share = document.getElementsByClassName("share-content");
    var i;
    for (i = 0; i < share.length; i++) {
      var openShare = share[i];
      if (openShare.classList.contains('show')) {
        openShare.classList.remove('show');
      }
    }
  }
} 