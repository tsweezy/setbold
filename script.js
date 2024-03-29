/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "1em";
    } else {
        if (currentScrollPos > 512)
            document.getElementById("header").style.top = "-10em";
    }
    prevScrollpos = currentScrollPos;
})