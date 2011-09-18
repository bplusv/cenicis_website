$(document).ready(function(){	
	points = [[10, 30], [50, 30], [90, 30], [130, 30], [170, 30], [210, 30], [250, 30],[290, 30], [330, 30],
				[30, 50], [310, 50],
				[10, 70], [70, 70], [330, 70], [270, 70],
				[110, 90], [230, 90],
				[10, 110], [150, 110], [190, 110], [330, 110], 
				[170, 130],
				[10, 150], [330, 150],
				
				[10, 210], [50, 210], [90, 210], [130, 210], [170, 210], [210, 210], [250, 210], [290, 210], [330, 210]];
	$('div#top_content').mouseleave(function() {
		resetBlocks(points, '#top_content');
	});

	
	drawBlocks(points, '#top_content');
	$('#title_1').animate({ top: 0}, { queue: false, duration: 1500 }).animate({ opacity: 1 }, 1500);
	$('#txt_1').animate({ opacity: 1 }, 2000);
});
