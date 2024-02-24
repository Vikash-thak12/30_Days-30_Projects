const api = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
}

getQuote(api);