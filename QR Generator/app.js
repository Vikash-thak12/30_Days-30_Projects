let qrText = document.querySelector("#qrText");
let imgbox = document.querySelector(".imgbox");
let qrImage = document.querySelector("#qrImage");
api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQr() {
    if(qrText.value.length > 0) {
        qrImage.src = api + qrText.value;
        imgbox.classList.add("show-img");
        qrText.value= "";
    } else 
    {
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        },1000);
    }
}

// Adding an event listener for keypress event on the input field
qrText.addEventListener("keypress", function(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
        // Call the generateQr function when Enter key is pressed
        generateQr();
    }
});