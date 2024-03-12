let toastbox = document.querySelector("#toastbox");
var SuccesMsg = 'Successfully Done.';
var ErroMsg = 'Your message is Error!';
var InvalidMsg = 'Please enter the valid message...'

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);
}