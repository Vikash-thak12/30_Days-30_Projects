let toastbox = document.querySelector("#toastbox");
var SuccesMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Done.';
var ErroMsg = ' <i class="fa-solid fa-circle-xmark"></i> Your message is Error!';
var InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Please enter the valid message...'

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

    if(msg.includes('Error')) {
        toast.classList.add('error');
    }

    if(msg.includes('valid')) {
        toast.classList.add('valid')
    }

    // setTimeout( () => {
    //     toast.remove();
    // },3000)
}