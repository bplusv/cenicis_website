$(document).ready(function(){				
	points = [[110, 30], [130, 30], [150, 30], [170, 30], [190, 30],
				[70, 70], [90, 70], [210, 70], [230, 70],
				[70, 110], [230, 110], [250, 110],
				[210, 150], [230, 150],
				[170, 190], [190, 190],
				[170, 230], [190, 230],
				
				[170, 310], [190, 310]];
				
	$('div#gendai_container').mouseleave(function() {
		$('div#gendai_container > img').addClass('trash');
		$('.trash').stop().fadeTo(1000, 0, function() {
			$('.trash').remove();
		 });
		drawBlocks(points, 'div#gendai_container');
	});
	
	drawBlocks(points, 'div#gendai_container');
	$('#title_1').css('opacity', '0');
	$('#txt_1').css('opacity', '0');
	$('#title_1').animate({ top: 30}, { queue: false, duration: 500 }).animate({ opacity: 1 }, 1000);
	$('#txt_1').animate({ opacity: 1 }, 1000);
	
});