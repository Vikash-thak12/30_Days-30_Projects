const Container = document.querySelector(".note-container");
const Btn = document.querySelector("#btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    Container.innerHTML = localStorage.getItem("notes");
}


function updateStorage() {
    localStorage.setItem("notes", Container.innerHTML);
}

Btn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let img = document.createElement("img");
    img.src = "images/delete.png";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    Container.appendChild(inputBox).appendChild(img);
})

Container.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(item => {
            item.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

showNotes();