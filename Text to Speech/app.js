var btn = document.querySelector("#btn");
var textarea = document.querySelector("#area");
var select = document.querySelector("#select");


// SpeechSynthesisUtterance(); is a part of the Web Speech API in JavaScript that helps the browser speak out text.
let speech = new SpeechSynthesisUtterance();

btn.addEventListener("click", () => {
    speech.text = textarea.value;

    
// window.speechSynthesis.speak(speech); is a JavaScript command that instructs the browser to speak the text contained in the      SpeechSynthesisUtterance object
    window.speechSynthesis.speak(speech);
});