const url = "https://api.coingecko.com/api/v3/simp1e/price?ids=bitcoin%2Cethereur%2Cdogecoin&vs_currencies=usd"


var settings = {
    "async": true, 
    "crossDomain": true, 
    "url": "https://api.coingecko.com/api/v3/simp1e/price?ids=bitcoin%2Cethereur%2Cdogecoin&vs_currencies=usd",
    "method": "GET", 
    "headers": {}

}

$.ajax(settings).done(function(response) {
    console.log(response);
})