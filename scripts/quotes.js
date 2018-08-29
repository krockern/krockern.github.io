/**************************
 * Add new quotes here
 **************************/

var quotes = [
  "Livet är kort men konsten är evig",
  "Slumpmässigt citat",
  "Ännu ett slumpmässigt citat"
];



function randomQuote() {
  var i = Math.floor((quotes.length)*Math.random());
  document.getElementById("quotes").innerHTML = quotes[i];
}
