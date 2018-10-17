$(document).ready(function() {
  $('.slider').slick({
  	dots: true,
  });
  $('.map__img').click(function(){
    $('.popup').removeClass('hide');

    $(document.body).css('overflow', 'hidden');

    $('.popup__content').click(function(){
      $('.popup').addClass('hide');

      $(document.body).css('overflow', 'scroll');

    });
    $('.popup__close').click(function(){
      $('.popup').addClass('hide');

      $(document.body).css('overflow', 'scroll');
      
    });
  });
});

