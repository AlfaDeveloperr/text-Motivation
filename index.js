const quote = [
    "There is no tomorrow, there is now",
    "Those who do not pay the price for success for a period of time will pay the price of failure for a lifetime",
    "Take Action to achieve",
];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quote.length);
    const quoteContainer = document.getElementById("quote-text");
    quoteContainer.innerText = quote[randomIndex]
}
document.addEventListener("DOMContentLoaded", displayRandomQuote);
document.addEventListener("DOMContentLoaded", displayRandomQuote);