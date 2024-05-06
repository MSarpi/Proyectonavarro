var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 90) {
      document.getElementById("navbar-smoth").style.top = "0";
  } else {
      document.getElementById("navbar-smoth").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
}
