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



//form

$("#callback").submit(function() {
	$.ajax({
		type: "GET",
		url: "mail.php",
		data: $("#callback").serialize()
	}).done(function() {
		alert("Спасибо за заявку!");
		setTimeout(function() {
			$.fancybox.close();
		}, 1000);
	});
	return false;
});


// reg

$(function(){
 
  function formSwitch(e) {
    var self = $(this),
        form = $('form');
    
    if(form.hasClass('back-visible')) 
    {
       self.siblings($('h2')).text('Нет аккаунта?');
       self.text('Регистрация!');
       form.removeClass('back-visible');
    } else {
      self.siblings($('h2')).text('Уже зарегистрированы?');
      self.text('Войти!');
      form.addClass('back-visible');
    }
    
    e.preventDefault();
  }
  
  $('#form-switch').on('click', formSwitch);
  
  $('form').submit(function(e){
    e.preventDefault();
  });
});

});