$(document).ready(function() {

    // Variables and Cached Selectors
    var $body           = $('body'),
        $input          = $('.input-field'),
        $carousel       = $('.slick');

    $body.removeClass('no-js');

    function inputFocus (el) {
        el.parent().addClass('input-filled');
    }

    function inputOutFocus (el) {
        if (el.val().length===0) {
            el.parent().removeClass('input-filled');
        };
    }

    $input.on('focus', function() {
        inputFocus($(this));
    });

    $input.on('focusout', function() {
        inputOutFocus($(this));
    });

    $carousel.slick({
         centerMode: true,
         slidesToShow: 3,
         variableWidth: true,
         initialSlide: 2
    });
});