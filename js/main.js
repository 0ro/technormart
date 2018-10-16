$(document).ready(function() {
  $('.slider').slick({
  	dots: true,
  });
  $('.map__img').click(function(){
    $('.popup').fadeIn(500);

    $(document.body).css('overflow', 'hidden');

    $('.popup__content').click(function(){
      $('.popup').fadeOut(500);

      $(document.body).css('overflow', 'scroll');

    });
    $('.popup__close').click(function(){
      $('.popup').fadeOut(500);

      $(document.body).css('overflow', 'scroll');
      
    });
  });
});

