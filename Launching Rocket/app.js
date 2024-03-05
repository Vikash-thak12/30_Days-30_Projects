var countDownDate = new Date("Mar 5, 2024 14:57:00").getTime();
var x = setInterval(() => {
    var currentDate = new Date().getTime();
    var distance = countDownDate - currentDate;

    console.log(distance);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;


    if (distance < 0) {
        clearInterval(x);


        document.querySelector("#days").innerHTML = "00";
        document.querySelector("#hours").innerHTML = "00";
        document.querySelector("#minutes").innerHTML = "00";
        document.querySelector("#seconds").innerHTML = "00";
    }


}, 1000);   