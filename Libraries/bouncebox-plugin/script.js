$(document).ready(function(){

	/* Converting the #box div into a bounceBox: */
	$('#bouncebox').bounceBox();

	/* Listening for the click event and toggling the box: */
	$('a.bounceboxbutton').click(function(e){

		$('#bouncebox').bounceBoxToggle();
		e.preventDefault();
	});
	
	/* When the box is clicked, hide it: */
	$('#bouncebox').click(function(){
		$('#bouncebox').bounceBoxHide();
	});
});
