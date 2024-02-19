let qrText = document.querySelector("#qrText");
let imgbox = document.querySelector("#imgbox");
let qrImage = document.querySelector("#qrImage");
api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQr() {
    if(qrText.value.length > 0) {
        qrImage.src = api + qrText.value;
    }
}