// Sky Speir
// PROJECT #1 - Random Quote Generator
// Estimated time : 12 hours over 3-4 days

// PROVIDED WITH PROJECT
// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// getRandomQuote function assigns the index value of a random quote,
// within a range of 0 to the amount of quotes availible (length of quote array)
// that value is assigned to a variable, and that number is stored / return as the # of quote
function getRandomQuote() {
  var Quote = Math.floor(Math.random() * (quotes.length));
  return quotes[Quote];
}

// printQuote assign the stored getRandomQuote value to selectedQuote variable
// the html string is generated, and the corresponding properties for the selected quote are referenced by using the selectedQuote variable in the html string
// once the string is constructed, it is linked to the quote-box id in the index.html file (so it will display in that div)

function printQuote () {
  var selectedQuote = getRandomQuote();
  var html = '<p class="quote">' + selectedQuote.quote + '</p>' + '<p class="source">' + selectedQuote.source +
  '<span class="citation">' + selectedQuote.citation + '</span>' + '<span class="year">' + selectedQuote.year + '</span>' + '<span class="tag">' + selectedQuote.tag + '</span>' + '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

// the quotes array featuring the quotes themselves and their corresponding information
// 6 quotes in total
var quotes = [
  {quote : "Perfect purity is possible if you turn your life into a line of poetry written with a splash of blood.",
  source : "- Yukio Mishima",
  citation : "Runaway Horses",
  year : "1969",
  tag : "Literature"},

  {quote : "Leaving behind the babble of the plaza, I enter the Library. I feel, almost physically, the gravitation of the books, the enveloping serenity of order, time magically dessicated and preserved",
  source : "- Jorge Luis Borges",
  citation : "Dreamtigers",
  year : "1960",
  tag : "Literature"},

  {quote : "I opened myself to the gentle indifference of the world.",
  source : "- Albert Camus",
  citation : "L'Étranger (The Stranger)",
  year : "1942",
  tag : "Literature"},

  {quote : "A body, just one, that I hadn’t identified, surreptitiously had filled the place with a seduction that permeated so deeply I couldn’t discover the cause, I couldn’t uncover the root of it.",
  source : "- Anne Garréta",
  citation : "Sphinx",
  year : "1986",
  tag : "Literature"},

  {quote : "How nice to feel nothing, and still get full credit for being alive.",
  source : "Kurt Vonnegut",
  citation : "Slaughterhouse-Five",
  year : "1969",
  tag : "Literature"},

  {quote : "I am so clever that sometimes I don't understand a single word of what I am saying.",
  source : "- Oscar Wilde",
  citation : "The Happy Prince and Other Tales",
  year : "1888",
  tag : "Literature"}
];

// printQuote is called in order to run through the above information, and display the qutoes!
printQuote();

// an interval is set for 4 seconds
// the function printQuote will run again every interval
// getRandomQuote is used in order for printQuote to run again but with a new random number
setInterval(function () {
  printQuote(getRandomQuote());
},4000);
