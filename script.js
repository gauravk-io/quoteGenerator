
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const key = 'Kpr3jA0IUqt1mB22iLNSyw==xOX3yCQzRdfbc3Gc'
// const category = 'happiness'
const url = 'https://api.api-ninjas.com/v1/quotes';

function getNewQuote() {
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key
        }
    }).then(res => res.json().then(data => {
        quote.textContent = data[0].quote;
        author.textContent = data[0].author;
    }));
}
getNewQuote()

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.textContent + "--- by" + author.textContent, "Tweet Window", "width=600, height = 300");
}
