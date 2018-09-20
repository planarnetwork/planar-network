$(document).ready(function() {

    // Variables and Cached Selectors
    var $body           = $('body'),
        $window         = $(window),
        $input          = $('.input-field'),
        $carousel       = $('.slick'),
        $nav            = $('.js-nav'),
        $navLink        = $('.js-nav-link'),
        laptopWidth     = 992,
        $navToggle      = $('.js-burger'),
        $form           = $('#signup');

    $body.removeClass('no-js');
    $input.val('');

    function inputFocus(el) {
        el.parent().addClass('input-filled');
    }

    function inputOutFocus(el) {
        if (el.val().length===0) {
            el.parent().removeClass('input-filled');
        };
    }

    function addLoader() {
        $form.addClass('footer-form-response');
        $form.html('<span class="loader"></span>');
    }
    
    function closeForm() {
        $form.html('<p class="footer-form-thanks">Thank you for registering.</p>');
    }

    function toggleNav() {
        $navToggle.toggleClass('is-active');
        $nav.toggleClass('is-open');
        $navToggle.attr('aria-expanded', function (i, attr) { return attr == 'true' ? 'false' : 'true'});
    }

    function navToggleInactive() {
        $nav.removeClass('is-open');
        $navToggle.removeClass('is-active');
        $navToggle.attr('aria-expanded', 'false');
    }

    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 700);
        scrolled = true;
    }

    function runSlick() {
        $carousel.slick({
            centerMode: true,
            slidesToShow: 3,
            variableWidth: true,
            initialSlide: 1,
            infinite: false,
            appendArrows: $('.slick-feature-buttons'),
            prevArrow: '<button type="button" class="slick-arrow-prev"><span class="sr-only">Prev</span></button>',
            nextArrow: '<button type="button" class="slick-arrow-next"><span class="sr-only">Next</span></button>',
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                centerMode: false,
                initialSlide: 0,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                centerMode: false,
                initialSlide: 1,
                slidesToShow: 1,
                variableWidth: false
              }
            }
          ]
        });
    }

    $window.on('resize load', function() {
        if ($window.width() >= laptopWidth) {
          navToggleInactive();
        }
    });

    $input.on('focus', function() {
        inputFocus($(this));
    });

    $input.on('focusout', function() {
        inputOutFocus($(this));
    });

    $navToggle.on('click', function() {
        toggleNav();
    });

    $navLink.on('click', function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        if ($window.width() < laptopWidth) {
            toggleNav();
        }
        goToByScroll(link);
    });

    $form.on('submit', function(e) {
      e.preventDefault();
      if ($input.val().length > 3 && $input.val().includes("@")) {
        addLoader();
        $.ajax({
          type: "POST",
          url: $form.attr('action'),
          data: JSON.stringify({ data: $input.val() }),
          success: closeForm,
          error: closeForm,
          dataType: 'application/json'
        });
      }
    });

    runSlick();
});
