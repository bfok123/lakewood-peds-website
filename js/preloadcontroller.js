var showingSubPage = false;
var showingSubPage2 = false;

window.onload = function() {
  document.body.className += " loaded";
  var goToSubPageElements = document.getElementsByClassName("goToSubPage");
  var i;
  for(i = 0; i < goToSubPageElements.length; i++) {
    goToSubPageElements[i].addEventListener("click", slideLeft);
  }

  var goToSubPageElements = document.getElementsByClassName("goToSubPageTwo");
  var i;
  for(i = 0; i < goToSubPageElements.length; i++) {
    goToSubPageElements[i].addEventListener("click", slideLeftTwo);
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
  document.body.className += " slideleft";
  showingSubPage = true;
}

function slideLeftTwo() {
  document.body.className += " slideleftTwo";
  showingSubPage2 = true;
}

function slideRight() {
  var allElements = document.getElementsByTagName("*");
  var i;
  for(i = 0; i < allElements.length; i++) {
    if(hasClass(allElements[i], "slideleft") && showingSubPage) {
        allElements[i].classList.remove("slideleft");
        showingSubPage = false;
    } else if(hasClass(allElements[i], "slideleftTwo") && showingSubPage2) {
        allElements[i].classList.remove("slideleftTwo");
        showingSubPage2 = false;
    }
  }
}
