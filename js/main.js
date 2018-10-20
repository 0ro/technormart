$(document).ready(function() {
  $('.slider').slick({
  	dots: true,
  });
  $('.map__img').click(function(){
    $('.popup').toggleClass('hide');
    $(".popup__content").html($(".map-google"));
    $('.popup-shim').toggleClass('hide')
    $("body").toggleClass('hidden');
  });
  $('.popup-shim').click(function(){
    $('.popup').toggleClass('hide');
    $('.popup-shim').toggleClass('hide')
    $("body").toggleClass('hidden');
  });
  $('.popup__close').click(function(){
    $('.popup').toggleClass('hide');
    $('.popup-shim').toggleClass('hide')
    $("body").toggleClass('hidden');
  });
});

