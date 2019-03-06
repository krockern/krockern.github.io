/*
var picsList = [["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%","Bildtext"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%","Denna staty av Maj kan hittas i Danderyd, Stockholm"],
["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%","Bildtext"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%","Bildtext Morbi eget malesuada lorem. Integer facilisis tellus eu enim feugiat maximus. Ut posuere erat vitae dolor ullamcorpereuismod. Vivamus quis neque erat. Maecenas id porta justo. Integer porta in nunc id cursus. Nulla tempor auctor auctor.Fusce ligula mauris, finibus eget sem vitae, vestibulum"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%","Bildtext"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%","Denna staty av Maj kan hittas i Danderyd, Stockholm"],
["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%","Bildtext"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%","Denna staty av Maj kan hittas i Danderyd, Stockholm"],
["Skulptur 1", "pages/blank.html", "statues", "pics/512px-skulptur_001_mod.png","", "width:100%","Bildtext"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%","Bildtext"],
["Maj", "pages/maj.html", "statues" ,"pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", "Maj", "width:100%","Denna staty av Maj kan hittas i Danderyd, Stockholm"],
["Per Albin Hansson", "pages/per_albin_hansson.html", "statues", "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", "Per Albin Hansson", "width:100%","Bildtext"]];
*/

/************************
 * Gallerys
***************************/
function picsGallery(rowSize) {

  if (rowSize == 4) { var screenDiv = document.getElementById("largePicsGal"); }
  else if (rowSize == 3) { var screenDiv = document.getElementById("mediumPicsGal"); }
  else if (rowSize == 1) { var screenDiv = document.getElementById("smallPicsGal"); }


  var newrow = true;
  var col = 1;
  var picsCount = 1;

//  for (let index = 0; index < picsList.length; ++index) {
  for (var key in picsList) {
    if (picsList[key].include) {

      var rowDiv;

      if (newrow) {
        rowDiv = document.createElement("div");
        rowDiv.className += "w3-row-padding";
        screenDiv.appendChild(rowDiv);

        //reset counters
        col = 1;

        //new row created set newrow to false
        newrow = false;
      }


      var picDiv1 = document.createElement("div");
      picDiv1.className += "w3-col l3 m4 w3-margin-bottom w3-hover-light-grey";
      rowDiv.appendChild(picDiv1);

      var picDiv2 = document.createElement("div");
      picDiv2.className += "w3-display-container";
      picDiv1.appendChild(picDiv2);

      if (picsList[key].name != null) {
        var picDiv3 = document.createElement("div");
        picDiv3.className += "w3-display-topleft w3-padding"; //w3-black
        picDiv3.setAttribute("style", "color:#fff!important;background-color:rgba(0,0,0,0.5)!important");
        //picDiv3.appendChild(document.createTextNode(picsList[index][0]));
        picDiv3.appendChild(document.createTextNode(picsList[key].name));
        picDiv2.appendChild(picDiv3);
      }

      if (picsList[key].imageTextSmall != null) {
        var picDiv4 = document.createElement("div");
        picDiv4.className += "w3-display-bottomright w3-padding"; //w3-black
        picDiv4.setAttribute("style", "color:#fff!important;background-color:rgba(0,0,0,0.5)!important");
        picDiv4.appendChild(document.createTextNode(picsList[key].imageTextSmall));
        picDiv2.appendChild(picDiv4);
      }

      var anchor = document.createElement('a');
      if (picsList[key].pagesLoc != null) {
        anchor.setAttribute('href', "../" + picsList[key].pagesLoc);
      }
      picDiv2.appendChild(anchor);

      //Image
      var image = document.createElement("img");
      image.className += picsList[key].className;
      image.setAttribute("src", "../" + picsList[key].imageLoc);
      image.setAttribute("alt", picsList[key].altName);
      image.setAttribute("style", picsList[key].imageStyle);

      anchor.appendChild(image);

      //Image text
      var imageText = document.createElement("div");
      imageText.className += "w3-container";
      var imageTextPar = document.createElement("p");
      imageTextPar.appendChild(document.createTextNode(picsList[key].imageText));
      imageText.appendChild(imageTextPar);
      picDiv1.appendChild(imageText);
      picsCount++;
      //End row and do one more
      if (col == rowSize) {
        //Only do new row if there is more pics in the list
        if (picsCount < picsList.length) {
      //  if ()
          newrow = true;
          //if (row == 2) {

        }
      }
      col++;
    }
  }
}


/************************
 * Slideshows
***************************/

function slideshow(rowSize) {

  if (rowSize == 4) { var screenDiv = document.getElementById("largescreen"); }
  else if (rowSize == 3) { var screenDiv = document.getElementById("mediumscreen"); }
  else if (rowSize == 1) { var screenDiv = document.getElementById("smallscreen"); }

  var col = 1;
  var row = 0;
  var newrow = true;
  var slide = true;

  var picsCount = 1;
  var picsListLength = picsList.length;

  //for (let index = 0; index < picsList.length; ++index) {
  for (var key in picsList) {
    if (picsList[key].include) {
      var rowDiv;
      var slideDiv;

      //Create slide div
      if (slide) {
        slideDiv = document.createElement("div");
        if (rowSize == 4) { slideDiv.className += "slideDiv_large fade"; }
        else if (rowSize == 3) { slideDiv.className += "slideDiv_medium fade"; }
        else if (rowSize == 1) { slideDiv.className += "slideDiv_small fade"; }

        screenDiv.appendChild(slideDiv);

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
      picDiv1.className += "w3-col l3 m4 w3-margin-bottom";
      rowDiv.appendChild(picDiv1);

      var picDiv2 = document.createElement("div");
      picDiv2.className += "w3-display-container";
      picDiv2.setAttribute("style", "max-height:auto;");
      picDiv1.appendChild(picDiv2);

      if (picsList[key].name != null) {
        var picDiv3 = document.createElement("div");
        picDiv3.className += "w3-display-topleft w3-padding"; //w3-black
        picDiv3.setAttribute("style", "color:#fff!important;background-color:rgba(0,0,0,0.5)!important");
        picDiv3.appendChild(document.createTextNode(picsList[key].name));
        picDiv2.appendChild(picDiv3);
      }

      if (picsList[key].imageTextSmall != null) {
        var picDiv4 = document.createElement("div");
        picDiv4.className += "w3-display-bottomright w3-padding"; //w3-black
        picDiv4.setAttribute("style", "color:#fff!important;background-color:rgba(0,0,0,0.5)!important");
        picDiv4.appendChild(document.createTextNode(picsList[key].imageTextSmall));
        picDiv2.appendChild(picDiv4);
      }


      var anchor = document.createElement('a');
      if (picsList[key].pagesLoc != null) {
        anchor.setAttribute('href', picsList[key].pagesLoc);
      }
      picDiv2.appendChild(anchor);


      //Image
      var image = document.createElement("img");
      image.className += picsList[key].className;
      image.setAttribute("src", picsList[key].imageLoc);
      image.setAttribute("alt", picsList[key].altName);
      image.setAttribute("style", picsList[key].imageStyle);

      anchor.appendChild(image);
      picsCount++;

      //End row and do one more
      if (col == rowSize) {
        //Only do new row if there is more pics in the list
        if (picsCount <= picsListLength) {
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
}
