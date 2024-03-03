var hrs = document.querySelector("#hrs");
var mins = document.querySelector("#mins");
var secs = document.querySelector("#secs");




setInterval(() => {
    var getTime = new Date();
    // console.log(getTime);
    hrs.innerHTML = getTime.getHours();
    mins.innerHTML = getTime.getMinutes();
    secs.innerHTML = getTime.getSeconds();
}, 1000);
