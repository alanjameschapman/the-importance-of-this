$('button').mouseenter(function() {
    $(this).removeClass('make-blue').addClass('make-red');
})

$('button').mouseleave(function() {
    $(this).removeClass('make-red').addClass('make-blue');
})