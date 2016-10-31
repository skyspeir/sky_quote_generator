// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var recievedQuotes = [];
var randQuote = getRandomQuote();
var viewedQuotes = [];
var splicedQuote = [];
var randNum;
var html ='';
var timedPrint = setInterval(printQuote, 15000);



var getRandomQuote = function () {
  var randomQuote = quotes[Math.floor(Math.random() * 4)].quote;
  return(randomQuote);
};


function printQuote () {
  var selectedQuote = getRandomQuote();
  var html = '<p class="quote">' + selectedQuote.quote + '</p>' + '<p class="source">' + selectedQuote.source +
    '<span class="citation">' + selectedQuote.citation + '</span>' + '<span class="year">' + selectedQuote.year + '</span>' + '<span class="category">' + selectedQuote.category + '</span>' + '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

var quotes = [
  {quote : "Perfect purity is possible if you turn your life into a line of poetry written with a splash of blood.",
  source : "- Yukio Mishima",
  citation : "Runaway Horses",
  year : 1969},

  {quote : "Leaving behind the babble of the plaza, I enter the Library. I feel, almost physically, the gravitation of the books, the enveloping serenity of order, time magically dessicated and preserved",
  source : "- Jorge Luis Borges",
  citation : "Dreamtigers",
  year : 1960},

  {quote : "I opened myself to the gentle indifference of the world.",
  source : "- Albert Camus",
  citation : "L'Étranger (The Stranger)",
  year : 1942},

  {quote : "A body, just one, that I hadn’t identified, surreptitiously had filled the place with a seduction that permeated so deeply I couldn’t discover the cause, I couldn’t uncover the root of it.",
  source : "- Anne Garréta",
  citation : "Sphinx",
  year : 1986}
];


// var selectFruit = ["Apple", "Orange", "Banana", "Cherry"];
// var pickAFruit = function () {
// var todaysFruit = selectFruit[Math.floor(Math.random() * 4)];
// console.log(todaysFruit);
// };
//
// pickAFruit();
