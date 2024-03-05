const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(() => {
    var CurrentDate = new Date();
    console.log(CurrentDate);
    // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    document.querySelector("#date").innerHTML = CurrentDate.getDate();
    document.querySelector("#day").innerHTML = daysOfWeek[CurrentDate.getDay()];
    document.querySelector("#month").innerHTML = monthsOfYear[CurrentDate.getMonth()];
    document.querySelector("#year").innerHTML = CurrentDate.getFullYear();
}, 1000);    