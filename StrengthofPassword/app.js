var password = document.querySelector("#password");
var message = document.querySelector("#message");
var str = document.querySelector("#strength");
var bor = document.querySelector(".input-box")

password.addEventListener("input", () => {
    if(password.value.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }

    if(password.value.length < 4) {
        str.innerHTML = "Weak";
        message.style.color = "#ff5925"
        bor.style.borderColor = "#ff5925"
        
    } else if(password.value.length >= 4 && password.value.length < 8) {
        str.innerHTML = "medium"
        message.style.color = "yellow"
        bor.style.borderColor = "yellow"

    } else 
    {
        str.innerHTML = "Strong"
        message.style.color = "#26d730";
        bor.style.borderColor = "#26d730"
    }
})