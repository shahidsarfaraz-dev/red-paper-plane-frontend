jQuery(document).ready(function ($) {
  // Initialize AOS start
  AOS.init({ once: true });
  // Initialize AOS end

  // hamburger menu start
  const menu = $(".menu");
  const hamburgerMenu = $(".hamburger-menu");

  hamburgerMenu.on("click", function () {
    menu.toggleClass("active");
  });
  // hamburger menu end

  // add arrow to submenu parents start
  var menuItems = $(".header-bottom .menu > li.menu-item-has-children");
  var siteURL = window.location.origin;
  menuItems.each(function () {
    var customHTML = $("<div></div>").addClass("submenu-toggler");
    var imgElement = $("<img>")
      .attr("src", siteURL + "/wp-content/themes/nursing-assignment/assets/img/icons/arrow-down.svg")
      .attr("alt", "icon")
      .attr("width", 13)
      .attr("height", 7);
    customHTML.append(imgElement);
    $(this).append(customHTML);
  });
  var menuToggler = $(".header-bottom .menu > li.menu-item-has-children .submenu-toggler");
  menuToggler.on("click", function () {
    console.log(4);
    $(this).siblings(".sub-menu").toggleClass("active");
  });
  // add arrow to submenu parents end

  // accordions start
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
  // accordions end


  // about sec class toggle start
  function isElementInView(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  let aboutCounter = $('#aboutCounter span');
  let targetNumber = 84;
  let currentNumber = 0;
  let incrementSpeed = 50;

  function updateCounter() {
    let counterInterval = setInterval(function () {
      if (currentNumber < targetNumber) {
        currentNumber++;
        $(aboutCounter).text(currentNumber);
      } else {
        clearInterval(counterInterval); // Stop the interval once the target number is reached
      }
    }, incrementSpeed);
  }
  function checkInViewAndAddClass() {
    var targetSection = $('.about-sec .graph-wrapper'); // Change this selector to your specific section

    if (isElementInView(targetSection)) {
      setTimeout(() => {
        updateCounter();
        $('.about-sec').addClass('active');
      }, 2000);
    }
  }
  checkInViewAndAddClass();
  $(window).on('scroll', function () {
    checkInViewAndAddClass();

  });
  // about sec class toggle end


  // counter increament animation start
  var animationStarted = false;

  function isElementInViewport(el) {
    var rect = el.get(0).getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || $(window).height()) &&
      rect.right <= (window.innerWidth || $(window).width())
    );
  }

  function animateValue($element, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = (end > 1000000) ? 100000 : (end > 10000) ? 10000 : 10;
    var stepTime = Math.abs(Math.floor(duration / (range / increment)));

    var timer = setInterval(function () {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      if (current >= 1000000) {
        $element.text((current / 1000000) + 'M+');
      } else if (current >= 1000) {
        $element.text((current / 1000) + 'k+');
      } else {
        $element.text(current);
      }
    }, stepTime);
  }


  function startCounterAnimation() {
    if (!animationStarted) {
      $('.counter').each(function () {
        var target = parseInt($(this).attr('data-target'));
        animateValue($(this), 0, target, 2000);
      });
      animationStarted = true;
    }
  }

  $(window).on('scroll', function () {
    $('.counter').each(function () {
      if (isElementInViewport($(this))) {
        startCounterAnimation();
      }
    });
  });
  // counter increament animation end



  $(".brand-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 6,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 4
      }

    }, {

      breakpoint: 767,
      settings: {
        slidesToShow: 3
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

