var picsList = [["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%"],
["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%"],
["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%"],
["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%"]];


function largescreenPics() {
  var largescreenDiv = document.getElementById("largescreen");
  var col = 1;
  var row = 0;
  var newrow = true;
  var slide = true;


  for (let index = 0; index < picsList.length; ++index) {
    var rowDiv;
    var slideDiv;

    //Create slide div
    if (slide) {
      slideDiv = document.createElement("div");
      slideDiv.className += "slideDiv_large fade";
      largescreenDiv.appendChild(slideDiv);

      slide = false;
    }

    //Create new row
    if (newrow) {
      rowDiv = document.createElement("div");
      rowDiv.className += "w3-row-padding";
      slideDiv.appendChild(rowDiv);

      //reset counters
      col = 1;
      row++;

      //new row created set newrow to false
      newrow = false;

    }
      var picDiv1 = document.createElement("div");
      picDiv1.className += "w3-col l3 m6 w3-margin-bottom";
      rowDiv.appendChild(picDiv1);

      var picDiv2 = document.createElement("div");
      picDiv2.className += "w3-display-container";
      picDiv1.appendChild(picDiv2);

      var picDiv3 = document.createElement("div");
      picDiv3.className += "w3-display-topleft w3-black w3-padding";
      picDiv3.appendChild(document.createTextNode(picsList[index][0]));
      picDiv2.appendChild(picDiv3);

      var anchor = document.createElement('a');
      anchor.setAttribute('href', picsList[index][1]);
      picDiv2.appendChild(anchor);

      //Image
      var image = document.createElement("img");
      image.className += picsList[index][2];
      image.setAttribute("src", picsList[index][3]);
      image.setAttribute("alt", picsList[index][4]);
      image.setAttribute("style", picsList[index][5]);

      anchor.appendChild(image);

      //End row and do one more
      if (col == 4) {
        //Only do new row if there is more pics in the list
        if (index < (picsList.length - 1)) {
          newrow = true;
          //if (row == 2) {
          if (row == 1) {
            slide = true;
            row = 0;
          }
        }
      }
      col++;
  }
}

function mediumscreenPics() {
  var mediumscreenDiv = document.getElementById("mediumscreen");
  var col = 1;
  var row = 0;
  var newrow = true;
  var slide = true;


  for (let index = 0; index < picsList.length; ++index) {
    var rowDiv;
    var slideDiv;

    //Create slide div
    if (slide) {
      slideDiv = document.createElement("div");
      slideDiv.className += "slideDiv_medium fade";
      mediumscreenDiv.appendChild(slideDiv);

      slide = false;
    }

    //Create new row
    if (newrow) {
      rowDiv = document.createElement("div");
      rowDiv.className += "w3-row-padding";
      slideDiv.appendChild(rowDiv);

      //reset counters
      col = 1;
      row++;

      //new row created set newrow to false
      newrow = false;

    }
      var picDiv1 = document.createElement("div");
      picDiv1.className += "w3-col l3 m4 w3-margin-bottom"; //was m6
      rowDiv.appendChild(picDiv1);

      var picDiv2 = document.createElement("div");
      picDiv2.className += "w3-display-container";
      picDiv1.appendChild(picDiv2);

      var picDiv3 = document.createElement("div");
      picDiv3.className += "w3-display-topleft w3-black w3-padding";
      picDiv3.appendChild(document.createTextNode(picsList[index][0]));
      picDiv2.appendChild(picDiv3);

      var anchor = document.createElement('a');
      anchor.setAttribute('href', picsList[index][1]);
      picDiv2.appendChild(anchor);

      //Image
      var image = document.createElement("img");
      image.className += picsList[index][2];
      image.setAttribute("src", picsList[index][3]);
      image.setAttribute("alt", picsList[index][4]);
      image.setAttribute("style", picsList[index][5]);

      anchor.appendChild(image);

      //End row and do one more
      if (col == 3) { //with m6 use 2
        //Only do new row if there is more pics in the list
        if (index < (picsList.length - 1)) {
          newrow = true;
          //if (row == 2) {
          if (row == 1) {
            slide = true;
            row = 0;
          }
        }
      }
      col++;
  }
}

function smallscreenPics() {
  var smallscreenDiv = document.getElementById("smallscreen");

  for (let index = 0; index < picsList.length; ++index) {

    slideDiv = document.createElement("div");
    slideDiv.className += "slideDiv_small fade";
    smallscreenDiv.appendChild(slideDiv);

    var anchor = document.createElement('a');
    anchor.setAttribute('href', picsList[index][1]);
    slideDiv.appendChild(anchor);

    //Image
    var image = document.createElement("img");
    image.className += picsList[index][2];
    image.setAttribute("src", picsList[index][3]);
    image.setAttribute("alt", picsList[index][4]);
    image.setAttribute("style", picsList[index][5]);

    anchor.appendChild(image);

  }

}
