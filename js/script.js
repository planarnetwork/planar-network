$(document).ready(function() {

    // Variables and Cached Selectors
    var $body           = $('body'),
        $input          = $('.input-field');

    $body.removeClass('no-js');

    $input.on('focus', function() {
        $(this).parent().addClass('input-filled');
    });

    $input.on('focusout', function() {
        if ($(this).val().length===0) {
            $(this).parent().removeClass('input-filled');
        };
    });
});