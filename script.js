
window.onload = function () {

    var seconds = 0;
    var milesec = 0;
    var appendMilesec = document.getElementById("milesec");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("start-btn");
    var buttonStop = document.getElementById("stop-btn");
    var buttonReset = document.getElementById("reset-btn");
    var Interval;


    buttonStart.onclick = function () {
        Interval = setInterval(timer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        milesec = "00";
        seconds = "00";
        appendMilesec.innerHTML = milesec;
        appendSeconds.innerHTML = seconds;
    }

    function timer() {

        milesec++;

        if (milesec <= 9) {
            appendMilesec.innerHTML = "0" + milesec;
        }

        if (milesec > 9) {
            appendMilesec.innerHTML = milesec;
        }

        if (milesec > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milesec = 0;
            appendMilesec.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }

}