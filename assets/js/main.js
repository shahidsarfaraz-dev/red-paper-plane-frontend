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

  // Retrieve stored active accordion index
  let activeAccordion = sessionStorage.getItem('activeAccordion');

  if (activeAccordion !== null) {
    // Remove active class from all items first
    $('.accordion-item').removeClass('active');
    $('.accordion-content').removeClass('show');

    // Set the stored active accordion as active
    let target = $('.accordion-item').eq(activeAccordion);
    target.addClass('active');
    target.find('.accordion-content').addClass('show');
  }

  $('.accordion-header').on('click', function () {
    let index = $('.accordion-header').index(this);

    // Remove active state from all before setting a new one
    $('.accordion-item').removeClass('active');
    $('.accordion-content').removeClass('show');

    // Add active class to the clicked accordion
    let item = $(this).closest('.accordion-item');
    let content = item.find('.accordion-content');

    item.addClass('active');
    content.addClass('show');

    // Store the active accordion index
    sessionStorage.setItem('activeAccordion', index);
  });
});

