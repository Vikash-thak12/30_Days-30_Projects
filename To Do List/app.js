const text = document.querySelector("#text");
const list_container = document.querySelector("#list-container");

function addTask() {
    if(text.value === '') {
        alert("Please write some task:")
    } else {
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = '';
    
}