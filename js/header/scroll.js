// When the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.background = "rgb(5, 65, 115)";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
}
