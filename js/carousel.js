$(document).ready(function(){
	loadTeam();
 	$(window).resize(function() {
	    loadTeam();
    });
});

function loadTeam() {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	// desktop
	if (width > 414) {
		console.log("> 414");
		var carousel = document.getElementById("carousel");
		carousel.style.display = 'none';

		var grid = document.getElementById("grid");
		grid.style.display = 'block';

	}
	// mobile
	else {
		var grid = document.getElementById("grid");
		grid.style.display = 'none';

		var carousel = document.getElementById("carousel");
		carousel.style.display = 'block';

	}

	console.log("loadTeam()");
}