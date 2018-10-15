$(document).ready(function() {
  $('.slider').slick({
  	dots: true,
  });
  $('.map__img').click(function(){
    $('.popup').addClass('active');
  });
});

