var password = document.querySelector("#password");
var imgIcon = document.querySelector("#imgIcon");

imgIcon.addEventListener("click", () => {
    if(password.type == "password") {
        password.type = "text";
        imgIcon.src = "images/eye-open.png";
    } else 
    {
        password.type = "password";
        imgIcon.src = "images/eye-close.png"
    }
})