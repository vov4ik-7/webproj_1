$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 20) {
            $('.navbar').addClass('compressed');
        } else {
            $('.navbar').removeClass('compressed');
        }
    });

    /*var navbarOffset = $('.navbar').offset().top;

    $(window).on('scroll', function () {

        if ( $(window).scrollTop() >= navOffset ) { // if the navbar offset equal or bigger than user scrolling, make it fixed
            $('.navbar').addClass('navbar-fixed-top');

        } else {// if not, return it to its initial state
            $('.navbar').removeClass('navbar-fixed-top');
        }

    });*/

});