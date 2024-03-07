const Accesskey = "K73gs3ZlL7QTic4o8GJe3jpBvJ7xsvQBD5dE-PrU4RA";

const mainform = document.querySelector("#mainform");
const inputfield = document.querySelector("#inputfield");
const SearchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#showMore");

let keyword = "";
let page = 1;
async function searchImages(){
    keyword = inputfield.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}&per_page=12`;

    let response = await fetch(url);
    let data = await response.json();

    if(page === 1) {
        SearchResult.innerHTML = "";
    }

    let results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target = "_target";

        imageLink.appendChild(image);
        SearchResult.appendChild(imageLink);

    });

    showMoreBtn.style.display = "block";
}

mainform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})