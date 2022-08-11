"use strict";

// alert
alert('Now you will be redirected to the page with the Magic Cleaner advertisement');

// date
window.onload = initDate;

function initDate() {
    let day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    let month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    let tomorrow = new Date();
    let dtString = day[tomorrow.getDay()] + ", " + tomorrow.getDate() + " " + month[tomorrow.getMonth()] + ", " + tomorrow.getFullYear();
    document.getElementById("date").innerHTML = dtString;
}

// timer
function timer() {
    let timerSec = document.getElementById('seconds');
    timerSec.innerHTML--;

    if (timerSec.innerHTML == 0) {
        window.location.href = 'http://google.com';
        setTimeout(function () {}, 1000);
    } else {
        setTimeout(timer, 1000);
    }
}
setTimeout(timer, 1000);