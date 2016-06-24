console.log( "Hi, Denis!" );

$( document ).ready(function() {
	$(".step_1").animated("fadeInLeft", "bounceOutLeft");
  	$(".step_2").animated("flipInY", "flipInX");
  		$(".step_3").animated("flipInX", "flipInY");
  		 $(".step_4").animated("fadeInRight", "bounceOutRight");


});

//form

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you!");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});

