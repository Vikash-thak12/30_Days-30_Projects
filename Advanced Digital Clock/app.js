function clock() {
    var secdots = document.querySelector("#secdots");
    var mindots = document.querySelector("#mindots");
    var hrdots = document.querySelector("#hrdots");

    var date = new Date();
    var hrs = date.getHours() % 12;

    hrs = hrs === 0 ? 12 : hrs;

    var ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    var mins = date.getMinutes();
    var secs = date.getSeconds();

    secdots.innerHTML = '<br>' + ampm + '</br>' + '<h2>' + zero(secs) + '<br><span>Seconds</span></h2>';
    mindots.innerHTML = '<h2>' + zero(mins) + '<br><span>Minutes</span></h2>';
    hrdots.innerHTML = '<h2>' + zero(hrs) + '<br><span>Hours</span></h2>';
}

function zero(number) {
    if(number < 10) {
        return '0' + number;
    } else 
    {
        return number;
    }
}

setInterval(clock,1000);
// clock();