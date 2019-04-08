/*
    # Main javascript File
*/
//document.getElementById('greeter').innerHTML = "Bye!"
var date = getTime();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    //var h = 8;
    //var s = today.getSeconds();
    m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 500);

    if (h < 11 && h > 5) {
        document.getElementById("message").innerHTML =
        "Good Morning ";
    }else if (h > 11 && h < 17) {
        document.getElementById("message").innerHTML =
        "Good Afternoon ";
    }else {
        document.getElementsById('message').innerHTML =
        "Good Evening ";
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}
