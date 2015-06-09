$(document).ready(function() {
	var colors = [
	    "curiosity-blue",
	    // "ukraine",
	    "green-to-dark",
	    "fresh-turboscent",
	    "koko-caramel",
	    "virgin-america",
	    "portrait",
	    "turquoise-flow",
	    "vine",
	    "flickr",
	    "instagram",
	    "sunrise",
	    "aqua-marine",
	    "aubergine",
	    "bloody-mary",
	    "pastel-orange-at-the-sun",
	    "endless-river",
	    "predawn",
	    "purple-bliss",
	    "talking-to-mice-elf",
	    "hersheys",
	    "crazy-orange-i",
	    "between-the-clouds",
	    "calm-darya",
	    "lemon-twist"
	];

	$("body").addClass(colors[Math.floor(Math.random() * colors.length)]);
});