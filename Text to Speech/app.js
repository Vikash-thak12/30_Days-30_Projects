var btn = document.querySelector("#btn");
var textarea = document.querySelector("#area");
var select = document.querySelector("#select");

let speech = new SpeechSynthesisUtterance();

btn.addEventListener("click", () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
})