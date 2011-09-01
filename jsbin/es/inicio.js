$(document).ready(function(){
	// hero animation on hover
	// --------------------------------------------
	$('div#hero_left').mouseenter(function() {
		change_page('div#hero_left div', '0', '0', 500);
		change_cont('div#hero_left', '0px', '0px', '500px', '300px', 1.0, 500);
	});
	$('div#hero_left').mouseleave(function() {
		change_page('div#hero_left div', '-250px', '-75px', 500);
		change_cont('div#hero_left', '0px', '0px', '150px', '150px', 0.25, 500);
	});

	$('div#hero_central').mouseenter(function() {
		change_page('div#hero_central div', '0', '0', 500);
		change_cont('div#hero_central', '170px', '0px', '450px', '300px', 1.0, 500);
	});
	$('div#hero_central').mouseleave(function() {
		change_page('div#hero_central div', '-350px', '-75px', 500);
		change_cont('div#hero_central', '350px', '50px', '50px', '200px', 0.25, 500);
	});

	$('div#hero_right').mouseenter(function() {
		change_page('#hero_right div', '0', '0', 500);
		change_cont('#hero_right', '220px', '50px', '500px', '300px', 1.0, 500);
	});
	$('div#hero_right').mouseleave(function() {
		change_page('#hero_right div', '-250px', '-75px', 500);
		change_cont('#hero_right', '570px', '200px', '150px', '150px', 0.25, 500);
	});
	// --------------------------------------------
});