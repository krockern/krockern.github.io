var newsFeed = [
  {newsHeading:"2019-02-12", newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
						  "dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
              "egestas id."},

  {newsHeading:"2019-02-11", newsText:"I mars kommer det komma en genomgång av Emils liv som en film. Den kommer komma upp på den här sidan när den är klar. Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique dolor. Sed risus orci, " +
              "efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus egestas id."},


  {newsHeading:"2019-02-02", newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
						  "dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
              "egestas id."},

  {newsHeading:"2019-02-01", newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
              "consectetur adipiscing elit. Nunc commodo justo at justo lobortis efficitur eget et arcu. Nullam sed mauris dignissim, euismod lectus ac, tristique " +
            	"dolor. Sed risus orci, efficitur nec facilisis quis, laoreet non odio. Quisque sed tellus velit. Proin accumsan leo ante, id tincidunt tellus " +
              "egestas id."},

  {newsHeading:"2019-01-22", newsText:"Test av ny nyhetsdel. Ska se om detta är något att ha. Lorem ipsum dolor sit amet, " +
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
  var newsTopTwo = document.getElementById("newsTopTwo");
  var newsHideShow = document.getElementById("newsShow");

  for (var key in newsFeed) {

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

    if (key < 2) {
      newsTopTwo.appendChild(newsDiv);
    } else {
      newsHideShow.appendChild(newsDiv);
    }

  }
}
