jQuery(document).ready(function ($) {
  var accordionItems = $('.accordion-item');
  accordionItems.each(function () {
    var header = $(this).find('.accordion-header');
    var content = $(this).find('.accordion-content');

    header.on('click', function () {
      var isActive = $(this).parent().hasClass('active');

      // Close all content sections
      accordionItems.removeClass('active');
      accordionItems.find('.accordion-content').removeClass('show');

      // Toggle active class and show content
      if (!isActive) {
        $(this).parent().addClass('active');
        content.addClass('show');
      }
    });
  });

  $(".media-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
  });
  $(".brand-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    adaptiveHeight: true
  });

  $('.sidebar .accordion-header').on('click', function () {
    $(this).toggleClass('active');
    $('.sidebar .accordion-content').toggleClass('active');
  });
});

