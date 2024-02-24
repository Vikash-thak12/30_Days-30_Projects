const api = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const nextBtn = document.querySelector("#next-btn");
const tweet = document.querySelector("#tweet");

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function getTweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  ---  By " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

nextBtn.addEventListener("click", () => {
    getQuote(api);
});

tweet.addEventListener("click", () => {
    getTweet();
})

getQuote(api);  