console.log( "Hi, Denis!" );

$(document).ready(function() {

// FancyBox

$(".fancybox").fancybox();


// Carousel

var owl = $(".carousel");
owl.owlCarousel({
	items : 1,
	autoHeight : true
});
owl.on("mousewheel", ".owl-wrapper", function (e) {
	if (e.deltaY > 0) {
		owl.trigger("owl.prev");
	} else {
		owl.trigger("owl.next");
	}
	e.preventDefault();
});
$(".next_button").click(function() {
	owl.trigger("owl.next");
});
$(".prev_button").click(function() {
	owl.trigger("owl.prev");
});
var owl = $('.owl-carousel');
owl.owlCarousel({
	items:1,
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout:1000,
	autoplayHoverPause:true
});


});