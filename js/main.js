$(document).ready(function() {
  $(".slider").slick({
    dots: true,
  });
  function togglePopup() {
    $(".popup").toggleClass("hide");
    $(".popup-shim").toggleClass("hide");
    $("body").toggleClass("hidden");
  };
  function addContentToPopup(selector) {
    $(".popup__content").not("map-google").html($(selector));
  }
  $(".map__img").click(function(e){
    e.preventDefault();
    addContentToPopup(".map-google");
    togglePopup();
  });
  $(".popup-shim, .popup__close").click(togglePopup);
});

