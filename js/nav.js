/**
 * Created by mengruzhang on 7/8/17.
 */

// Header menu nav : scroll to fixed on top
// <script type="text/javascript" src="https://code.jquery.com/jquery-compat-git.js"></script>

// $(document).ready(function () {
//
//     var menu = $('.menu');
//     var origOffsetY = menu.offset().top;
//
//     function scroll() {
//         if ($(window).scrollTop() >= origOffsetY) {
//             $('.menu').addClass('sticky');
//             $('.content').addClass('menu-padding');
//         } else {
//             $('.menu').removeClass('sticky');
//             $('.content').removeClass('menu-padding');
//         }
//     }
//     document.onscroll = scroll;
// });
//




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


// * Created by mengruzhang on 7/8/17.
// */
// // <script type="text/javascript" src="https://code.jquery.com/jquery-1.6.4.min.js"></script>
//
// $(document).ready(function(){
//     var rotatorWidth = $('#rotator .images').width();
//
//     $('#rotator > a.arrow.left').click(function(e){
//         e.preventDefault;
//         var rotator = $('#rotator .images');
//
//         rotator.children('.imageHolder').first().animate({marginLeft:-rotatorWidth}, function(){
//             $(this).appendTo(rotator).removeAttr("style");
//         });
//     });
//     $('#rotator > a.arrow.right').click(function(e){
//         e.preventDefault;
//         var rotator = $('#rotator .images');
//         rotator.children('.imageHolder').last().prependTo(rotator).removeAttr("style").css("margin-left", -rotatorWidth).animate({marginLeft:"0"});
//     });
// });
//



// jQuery(document).ready(function ($) {

// ******* for the auto-play check box *******//
// $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
// });
// ******* for the auto-play check box *******//


//
//     var slideCount = $('#slider ul li').length;
//     var slideWidth = $('#slider ul li').width();
//     var slideHeight = $('#slider ul li').height();
//     var sliderUlWidth = slideCount * slideWidth;
//
//     $('#slider').css({ width: slideWidth, height: slideHeight });
//
//     // $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//     $('#slider ul').css({ width: sliderUlWidth, height: slideHeight });
//
//     $('#slider ul li:last-child').prependTo('#slider ul');
//
//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//
//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//
//     $('a.control_prev').click(function () {
//         moveLeft();
//     });
//
//     $('a.control_next').click(function () {
//         moveRight();
//     });
//
// });
