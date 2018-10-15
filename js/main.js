$(document).ready(function() {
  $('.slider').slick({
  	dots: true,
  });
  $('.map__img').click(function(){
    $('.popup').fadeIn(500);

    $('.popup__content').click(function(){
      $('.popup').fadeOut(500);
    });
  });
});

