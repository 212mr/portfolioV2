/**
 * Created by mengruzhang on 7/8/17.
 */


$(document).ready(function () {

    var menu = $('.menu');
    var origOffsetY = menu.offset().top - 110;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            $('.content').addClass('menu-padding');
        } else {
            $('.menu').removeClass('sticky');
            $('.content').removeClass('menu-padding');
        }
    }
    document.onscroll = scroll;
});

