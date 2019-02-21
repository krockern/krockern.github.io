var newsFeed = [
  {newsHeading:"2019-04-21",
  newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
  "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
	"dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
  "egestas id."},

  {newsHeading:"2019-02-11",
  newsText:"I mars kommer det komma en genomgång av Emils liv som en film. Den kommer komma upp på den här sidan när den är klar. Lorem ipsum dolor sit amet, " +
  "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique dolor. Sed risus orci, " +
  "efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus egestas id."},


  {newsHeading:"2019-02-02",
  newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Test av ny nyhetsdel. Ska se om detta är något att ha. Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
  "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
	"dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
  "egestas id."},

  {newsHeading:"2019-02-01",
  newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
  "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
  "dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
  "egestas id."},

  {newsHeading:"2018-12-10",
  newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
  "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
  "dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
  "egestas id."}

];

// A function for the "Read More" button
function readMore() {
  var newsHidden = document.getElementById("newsHidden");
  var newsShow = document.getElementById("newsShow");
  var showMoreBtn = document.getElementById("showMoreBtn");

  if (newsHidden.style.display === "none") {
    newsHidden.style.display = "inline";
    showMoreBtn.innerHTML = "Visa fler";
    newsShow.style.display = "none";
  } else {
    newsHidden.style.display = "none";
    showMoreBtn.innerHTML = "Dölj";
    newsShow.style.display = "inline";
  }
}

// Generates the news
function newsScript() {

  var localTime = (new Date).getTime();
  //console.log("Local:  " + localTime);
  var newsTopTwo = document.getElementById("newsTopTwo");
  var newsHideShow = document.getElementById("newsShow");

  var count = 1;

  for (var key in newsFeed) {
    var newsTime = (new Date(newsFeed[key].newsHeading + " 00:00:00")).getTime();

    console.log("News:   " + newsTime);
    // If (localTime - 2 months) < newsTime
    // or newsTime < localTime
    if (addMonths(localTime, -2) < newsTime && newsTime < localTime) {


      var newsDiv = document.createElement("div");
      newsDiv.className += "w3-col l5 w3-margin";

      var newsHeading = document.createElement("div");
      newsHeading.className += "news-heading";
      newsHeading.appendChild(document.createTextNode(newsFeed[key].newsHeading));
      newsDiv.appendChild(newsHeading);

      var newsText = document.createElement("div");
      newsText.className += "news-text";
      newsText.appendChild(document.createTextNode(newsFeed[key].newsText));
      newsDiv.appendChild(newsText);

      if (count <= 2) {
        newsTopTwo.appendChild(newsDiv);
      } else {
        newsHideShow.appendChild(newsDiv);
      }
      count++;
    }
  }

}

function addMonths(date, months) {
  var value = (new Date(date)).setMonth((new Date(date)).getMonth() + months);
  return value;
}
