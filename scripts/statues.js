//--------------Content text for the info windows for the map --------------------
//----------------------------------Start-----------------------------------------

//----------------------
// Staty utanför NH i Linköping
//----------------------
var statue_001_contentString = null;

//----------------------
// Per Albin Hansson, Parken Zoo, Eskilstuna
//----------------------
var per_albin_hansson_contentString =
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Per Albin Hansson</h4>'+
		'<div id="bodyContent">'+
			'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/per_albin_hansson.html"><img src="pics/per_albin_hansson/256px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG" alt="Per Albin Hansson" style="width:150px; align:center;"></a></div>' +
			'<div style="paddingLeft:5px"><p>Byst av <b>Per Albin Hansson</b> i Parken Zoo i Eskilstuna</p>'+
			'<p>Klicka <a href="pages/per_albin_hansson.html">här</a> för mer information</p>' +
			'<p><a href="https://www.google.com/maps/search/?api=1&query=59.372830,16.482146">Hitta hit</a></p></div>'+
		'</div>'+
	'</div>';

//----------------------
// Maj, Danderyd
//----------------------
var maj_danderyd_contentString =
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Maj</h4>'+
		'<div id="bodyContent">'+
			'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/maj.html"><img src="pics/maj-danderyd/256px-Emil_Näsvall_Maj.JPG" alt="Maj" style="width:150px; align:center;"></a></div>' +
			'<div style="paddingLeft:5px"><p>Statyn <b>Maj</b> i Danderyd är en bronsstaty, ca. två meter hög på en marmorsockel.</p>'+
			'<p>Maj finns även i Strykjärnsparken, Söderhamn och Skolparken, Vilhelmina</p>' +
			'<p>Klicka <a href="pages/maj.html">här</a> för mer information</p>' +
			'<p><a href="https://www.google.com/maps/search/?api=1&query=59.395572,18.037009">Hitta hit</a></p></div>'+
		'</div>'+
	'</div>';

//----------------------
// Maj, Söderhamn, Strykjärnsparken
//----------------------
var maj_strykjarnsparken_contentString =
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Maj</h4>'+
		'<div id="bodyContent">'+
			'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/maj.html"><img src="pics/maj-soderhamn/256px-Maj_Strykjarnsparken.jpg" alt="Maj" style="width:150px; align:center;"></a></div>' +
			'<div style="paddingLeft:5px"><p>Denna staty av <b>Maj</b> finns i Strykjärnsparken i Söderhamn</p>'+
			'<p>Maj finns även i Danderyd, Stockholm och Skolparken, Vilhelmina</p>' +
			'<p>Klicka <a href="pages/maj.html">här</a> för mer information</p>' +
			'<p><a href="https://www.google.com/maps/search/?api=1&query=61.301874,17.054075">Hitta hit</a></p></div>'+
		'</div>'+
	'</div>';

//----------------------
// Härjedalens Fjällmuseum
//----------------------
var harjedalens_fjallmuseum_contentString =
	'<div id="content">'+
		'<div id="siteNotice"></div>'+
		'<h4 id="firstHeading" class="firstHeading">Härjedalens Fjällmuseum</h4>'+
		'<div id="bodyContent">'+
			'<p><b>Härjedalens Fjällmuseum</b> har en permanent utställning av ' +
			'en del av <b>Emil Näsvalls</b> verk.</p>'+
			'<p>Fjällmuseets hemsida hittar du <a href="http://kommun.herjedalen.se/fjallmuseet.4.7a231afd12424b40e2880001097.html">här</a></p>'+
			'<p><a href="https://www.google.com/maps/search/?api=1&query=62.548326,12.537803">Hitta hit</a></p>'
		'</div>'+
	'</div>';

//----------------------
// I somamrhagen, Varberg
//----------------------
var i_sommarhagen_contentString =
	'<div id="content">'+
	 '<div id="siteNotice">'+
			'</div>'+
			'<h4 id="firstHeading" class="firstHeading">I sommarhagen</h4>'+
			'<div id="bodyContent">'+
				'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/i_sommarhagen.html"><img src="pics/i_sommarhagen/256px-I_sommarhagen.jpg" alt="Maj" style="width:150px; align:center;"></a></div>' +
				'<div style="paddingLeft:5px"><p>Statyn <b>I sommarhagen</b> står mellan två hus i Varberg</p>'+
				'<p>Klicka <a href="pages/i_sommarhagen.html">här</a> för mer information</p>' +
				'<p><a href="https://www.google.com/maps/search/?api=1&query=57.099466,12.248345">Hitta hit</a></p></div>'+
			'</div>'+
		'</div>';

//----------------------Content text for the info windows-------------------------
//-----------------------------------End------------------------------------------


/*{
name: name of the statue,
pagesLoc: the statues own page,
className: statues,
imageLoc: image location,
altName: alternative text if image is not loaded,
imageWidth: width of the image
imageText: text under the image in the gallary
lat: latitude coordinate for the map
lng: longitude coordinate for the map
title: marker title on the map
info: a separate var for the popup info window on the map, see above
pinColor: color for the marker pin on the map (set null if red, eg. 007569 for green)
}*/

var picsList = [
  {name: "Skulptur 1", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/512px-skulptur_001_mod.png", altName: "", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 57.412363, lng: 15.616854, title: "Staty i Linköping", info: statue_001_contentString, pinColor: null},

  {name: "Skulptur 1", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/512px-skulptur_001_mod.png", altName: "", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 58.412363, lng: 15.616854, title: "Staty i Linköping", info: statue_001_contentString, pinColor: null},

  {name: "Per Albin Hansson", pagesLoc: "pages/per_albin_hansson.html", className: "statues", imageLoc: "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", altName: "Per Albin Hansson", imageWidth: "width:100%;",
  imageText: "Bildtext Morbi eget malesuada lorem. Integer facilisis tellus eu enim feugiat maximus. Ut posuere erat vitae dolor ullamcorpereuismod. Vivamus quis neque erat. Maecenas id porta justo. Integer porta in nunc id cursus. Nulla tempor auctor auctor.Fusce ligula mauris, finibus eget sem vitae, vestibulum",
  lat: 59.372830, lng: 16.482146, title: "Per Albin Hansson", info: per_albin_hansson_contentString, pinColor: null},

  {name: "Per Albin Hansson", pagesLoc: "pages/per_albin_hansson.html", className: "statues", imageLoc: "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", altName: "Per Albin Hansson", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 58.372830, lng: 16.482146, title: "Per Albin Hansson", info: per_albin_hansson_contentString, pinColor: null},

  {name: "Maj", pagesLoc: "pages/maj.html", className: "statues" ,imageLoc: "pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", altName: "Maj", imageWidth: "width:100%;",
  imageText: "Denna staty av Maj kan hittas i Danderyd, Stockholm",
  lat: 59.395572, lng: 19.037009, title: "Maj i Danderyd", info: maj_danderyd_contentString, pinColor: null},

  {name: "Skulptur 1", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/512px-skulptur_001_mod.png", altName: "", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 58.912363, lng: 15.616854, title: "Staty i Linköping", info: statue_001_contentString, pinColor: null},

  {name: "Maj", pagesLoc: "pages/maj.html", className: "statues" ,imageLoc: "pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", altName: "Maj", imageWidth: "width:100%;",
  imageText: "Denna staty av Maj kan hittas i Danderyd, Stockholm",
  lat: 59.395572, lng: 18.037009, title: "Maj i Danderyd", info: maj_danderyd_contentString, pinColor: null},

  {name: "Skulptur 1", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/512px-skulptur_001_mod.png", altName: "", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 58.412363, lng: 15.616854, title: "Staty i Linköping", info: statue_001_contentString, pinColor: null},

  {name: "Per Albin Hansson", pagesLoc: "pages/per_albin_hansson.html", className: "statues", imageLoc: "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", altName: "Per Albin Hansson", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 59.372830, lng: 26.482146, title: "Per Albin Hansson", info: per_albin_hansson_contentString, pinColor: null},

  {name: "Maj", pagesLoc: "pages/maj.html", className: "statues", imageLoc: "pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", altName: "Maj", imageWidth: "width:100%;",
  imageText: "Denna staty av Maj kan hittas i Danderyd, Stockholm",
  lat: 49.395572, lng: 15.037009, title: "Maj i Danderyd", info: maj_danderyd_contentString, pinColor: null},

  {name: "Per Albin Hansson", pagesLoc: "pages/per_albin_hansson.html", className: "statues", imageLoc: "pics/per_albin_hansson/512px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG", altName: "Per Albin Hansson", imageWidth: "width:100%;",
  imageText: "Bildtext",
  lat: 59.372830, lng: 17.482146, title: "Per Albin Hansson", info: per_albin_hansson_contentString, pinColor: null},

  {name: "Maj", pagesLoc: "pages/maj.html", className: "statues", imageLoc: "pics/maj-danderyd/512px-Emil_Näsvall_Maj_mod.JPG", altName: "Maj", imageWidth: "width:100%;",
  imageText: "Denna staty av Maj kan hittas i Danderyd, Stockholm",
  lat: 59.395572, lng: 18.037009, title: "Maj i Danderyd", info: maj_danderyd_contentString, pinColor: null},

	{name: "Maj", pagesLoc: "pages/maj.html", className: "statues", imageLoc: "pics/maj-soderhamn/512px-Maj_Strykjarnsparken_mod.jpg", altName: "Maj", imageWidth: "width:100%;",
  imageText: "Denna staty av Maj kan hittas i Strykjärnsparken, Söderhamn",
  lat: 61.301874, lng: 17.054075, title: "Maj i Strykjärnsparken", info: maj_strykjarnsparken_contentString, pinColor: null}

];
