window.onload = function() {
  document.body.className += " loaded";
  document.getElementById("learnMore").addEventListener("click", slideLeft);
  document.getElementById("goBack").addEventListener("click", slideRight);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function slideLeft() {
  document.body.className += " slideleft";
}

function slideRight() {
  var allElements = document.getElementsByTagName("*");
  var i;
  for(i = 0; i < allElements.length; i++) {
    if(hasClass(allElements[i], "slideleft")) {
      allElements[i].classList.remove("slideleft");
    }
  }
}
