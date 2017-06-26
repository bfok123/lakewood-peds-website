window.onload = function() {
  document.body.className += " loaded";
  if(document.getElementById("goToSubPage") != null) {
    document.getElementById("goToSubPage").addEventListener("click", slideLeft);
  }

  if(document.getElementById("goToSubPageTwo") != null) {
    document.getElementById("goToSubPageTwo").addEventListener("click", slideLeftTwo);
  }

  var goBackElements = document.getElementsByClassName("goBack");
  var j;
  for(j = 0; j < goBackElements.length; j++) {
    goBackElements[j].addEventListener("click", slideRight);
  }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function slideLeft() {
  document.getElementById("mainSlideContent").className += " slideLeft";
  document.getElementById("subSlideContent").className += " slideLeft";
}

function slideLeftTwo() {
  document.getElementById("mainSlideContent").className += " slideLeftTwo";
  document.getElementById("subSlideContentTwo").className += " slideLeftTwo";
}

function slideRight() {
  var allElements = document.getElementsByTagName("*");
  var i;
  for(i = 0; i < allElements.length; i++) {
    if(hasClass(allElements[i], "slideLeft")) {
        allElements[i].classList.remove("slideLeft");
    } else if(hasClass(allElements[i], "slideLeftTwo")) {
        allElements[i].classList.remove("slideLeftTwo");
    }
  }
}
