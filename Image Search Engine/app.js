const Accesskey = "K73gs3ZlL7QTic4o8GJe3jpBvJ7xsvQBD5dE-PrU4RA";

const mainform = document.querySelector("#mainform");
const inputfield = document.querySelector("#inputfield");
const btn = document.querySelector("#btn");
const showMoreBtn = document.querySelector("#showMore");

let keyword = "";
let page = 1;
async function searchImages(){
    keyword = inputfield.value;
    const url = "https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}";
}