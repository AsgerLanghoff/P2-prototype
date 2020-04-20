// background.js

window.onload = function() {
    // your code

    var e = document.getElementById('picture');
    e.onmouseover = function () {
        document.getElementById('popup').style.display = 'block';
    }
    e.onmouseout = function () {
        document.getElementById('popup').style.display = 'none';
    }
};