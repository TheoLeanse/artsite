'use strict';

var dog = "http://rack.3.mshcdn.com/media/ZgkyMDE1LzAyLzAzLzgzL2RvZ3RyaWNrLmUxNmFhLmdpZgpwCXRodW1iCTEyMDB4OTYwMD4/696ebca8/d40/dog-trick.gif";
var cat = "http://i.imgur.com/4v9ftED.gif";

window.onload = function () {
    document.querySelector('.image').addEventListener('click', function (e) {
        e.target.src === dog
            ? e.target.src = cat
            : e.target.src = dog;
    });
};
