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


    var Seconddots = '';
    for(var i=1; i<61; i++) {
        var rotation = i * 6;
        if(i === secs) {
            Seconddots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        } else 
        {
            Seconddots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    var minutesdots = '';
    for(var i=1; i<61; i++) {
        var rotation = i * 6;
        if(i === mins) {
            minutesdots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        } else 
        {
            minutesdots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }


    
    var hourdots = '';
    for(var i=1; i<13; i++) {
        var rotation = i * 30;
        if(i === hrs) {
            hourdots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        } else 
        {
            hourdots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }
    

    secdots.innerHTML = Seconddots + '<b>' + ampm + '</b>' + '<h2>' + zero(secs) + '<br><span>Seconds</span></h2>';
    mindots.innerHTML = minutesdots + '<h2>' + zero(mins) + '<br><span>Minutes</span></h2>';
    hrdots.innerHTML = hourdots + '<h2>' + zero(hrs) + '<br><span>Hours</span></h2>';
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