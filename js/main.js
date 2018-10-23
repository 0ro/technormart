$(document).ready(function() {
  $('.slider').slick({
    dots: true,
  });
  function togglePopup() {
    $('.popup').toggleClass('hide');
    $('.popup-shim').toggleClass('hide');
    // $("body").toggleClass('hidden');
  };
  function addContentToPopup(selector) {
    $(".popup__content").html($(selector));
  }
  $('.map__img').click(function(e){
    e.preventDefault();
    addContentToPopup(".map-google");
    togglePopup();
  });
  $('.popup-shim').click(togglePopup);
  $('.popup__close').click(togglePopup);
});

