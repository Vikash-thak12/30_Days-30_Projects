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

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("item");
    } else if (e.target.tagName === "SPAN") {  
        e.target.parentElement.remove();
    }
}, false);

//In the above code the li and span must be uppercase other wise it's not working
// So, the reason why the code wasn't working until you made LI and SPAN uppercase is because JavaScript's tagName property returns tag names in uppercase, and you need to match this case when comparing them in your code for the event listener to function as expected.