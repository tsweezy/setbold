/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 50.0) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-4rem";
    }
    prevScrollpos = currentScrollPos;
}