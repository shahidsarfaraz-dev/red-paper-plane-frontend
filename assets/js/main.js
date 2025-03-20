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
    arrows: true,
    dots: false,
    variableWidth: true,
    touchThreshold: 20,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
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


  var accordionItems = $('.accordion-item');
  accordionItems.each(function () {
    var header = $(this).closest('.accordion-header');
    var content = $(this).closest('.accordion-content');
    
    header.on('click', function () {
      var isActive = $(this).parent().hasClass('active');

      // Close all content sections
      accordionItems.removeClass('active');
      accordionItems.find('.accordion-content').removeClass('show');
      if (!isActive) {
        $(this).parent().addClass('active');
        content.addClass('show');
      }
    });
  });


});

