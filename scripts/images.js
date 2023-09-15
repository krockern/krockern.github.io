
/*{
name: name of the statue,
pagesLoc: the statues own page,
className: statues,
imageLoc: image location,
altName: alternative text if image is not loaded,
imageStyle: width of the image
imageText: text under the image in the gallary
imageTextSmall: small text for copyright text (e.g. Foto: Bukowskis)
lat: latitude coordinate for the map
lng: longitude coordinate for the map
title: marker title on the map
info: a separate var for the popup info window on the map, see above
pinColor: color for the marker pin on the map (set null if red, eg. 007569 for green)
include: false if to ignore in the slideshow, false otherwise
}*/


var picsList = [
	{name: "Bild13", imageLoc: "pics/b13.jpg", className: "statues", altName: "B13", imageStyle: "width:100%;", 
	imageText: "Hund på rygg", imageTextSmall: "B13", title: "B13", info: "B13", include: true },
	
	{name: "Bild14", imageLoc: "pics/b14.jpg", className: "statues", altName: "B14", imageStyle: "width:100%;", 
	imageText: "Hund i soffa", imageTextSmall: "B13", title: "B13", info: "B13", include: true },
	
	{name: "Bild15", imageLoc: "pics/b15.jpg", className: "statues", altName: "B15", imageStyle: "width:100%;", 
	imageText: "Hund ute", imageTextSmall: "B13", title: "B13", info: "B13", include: true },

	{name: "Bild16", imageLoc: "pics/b16.jpg", className: "statues", altName: "B16", imageStyle: "width:100%;", 
	imageText: "Hund liggandes med leksak och boll", imageTextSmall: "B13", title: "B13", info: "B13", include: true },

	{name: "Bild15", imageLoc: "pics/b15.jpg", className: "statues", altName: "B15", imageStyle: "width:100%;", 
	imageText: "Hund ute", imageTextSmall: "B13", title: "B13", info: "B13", include: true },

	{name: "Bild13", imageLoc: "pics/b13.jpg", className: "statues", altName: "B13", imageStyle: "width:100%;", 
	imageText: "Hund på rygg", imageTextSmall: "B13", title: "B13", info: "B13", include: true },
	
	{name: "Bild14", imageLoc: "pics/b14.jpg", className: "statues", altName: "B14", imageStyle: "width:100%;", 
	imageText: "Hund i soffa", imageTextSmall: "B13", title: "B13", info: "B13", include: true },

	{name: "Bild16", imageLoc: "pics/b16.jpg", className: "statues", altName: "B16", imageStyle: "width:100%;", 
	imageText: "Hund liggandes med leksak och boll", imageTextSmall: "B13", title: "B13", info: "B13", include: true }
];








/*{
name: name of the statue,
pagesLoc: the statues own page,
className: statues,
imageLoc: image location,
altName: alternative text if image is not loaded,
imageStyle: width of the image
imageText: text under the image in the gallary
lat: latitude coordinate for the map
lng: longitude coordinate for the map
title: marker title on the map
info: a separate var for the popup info window on the map, see above
pinColor: color for the marker pin on the map (set null if red, eg. 007569 for green)
}*/

var smallStatuesList = [
{name: "Maj", pagesLoc: "pages/maj.html", className: "statues", imageLoc: "pics/maj-bukowskis/9067830_bukobject.jpg", altName: "Maj", imageStyle: "width:100%;",
imageText: "Foto: Bukowskis"},

{name: "", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/unnamed/9089574_bukobject.jpg", altName: "", imageStyle: "width:100%;",
imageText: "Foto: Bukowskis"},

{name: "", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/unnamed/10178877_bukobject.jpg", altName: "", imageStyle: "width:100%;",
imageText: "Foto: Bukowskis"},

{name: "Trappan", pagesLoc: "pages/blank.html", className: "statues", imageLoc: "pics/trappan/10377249_bukobject.jpg", altName: "Trappan", imageStyle: "width:100%;",
imageText: "Foto: Bukowskis"}
]
