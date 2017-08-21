/* ------------------------------------------------------------------------ */
/* ----------------------- DAN-SHIN.COM VERSION 2.0 ----------------------- */
/* ------------   Love getting feedback. Tell me what sucks.   ------------ */
/* ------------------------------------------------------------------------ */
/* ------------------------------- Jan 2013 ------------------------------- */
/* ------------------------------------------------------------------------ */


// Pixel to Ems Converter
// https://github.com/filamentgroup/jQuery-Pixel-Em-Converter
//http://dan-shin.com/public/docs/js/main.js

$.fn.toEm = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseInt(this[0],10),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return (that / scopeVal).toFixed(8) + 'em';
};

// compute viewport width
viewport = $(window).width();
totalems = parseInt($(viewport).toEm(), 10);

// adding target blank to profile links
$('#profile .article a').attr('target','_blank');

// clone content
$project = $('#projects').clone();
$profile = $('#profile').clone();

$(document).ready(function () {

    var easing = 'easeInOutCubic';
    var projects_article = $('#projects .article');
    var projects_img = $('img', '#projects .article');
    var menu_hidden = $('#menu a.menu-hidden');
    var menu_active = $('#menu a.menu-active');
    var menu_project = $('#menu a.menu-item:first-child');
    var menu_profile = $('#menu a.menu-item:first-child').siblings();
    var arrow = $('#arrow');
    var content = $('.content');

    change_project();

    if ($('body').hasClass('project')) { // on single project only

        menu_active.live('click', function(event) {
            event.preventDefault();
        });

        $('.content .set-active').css({'position':'relative'});
        $('.content').css({'height':'auto'});

    } else if ($('body').hasClass('index')) { // on index only

        // set content height (on index only)
        $('.content').waitForImages(function () {
            // set final content height
            var set_height = $('.projects').height();
            $('.content').css({'height':set_height});
            $('.content').css({'height':$('.projects').height()});
        }, function() {
            // set content height for each image load
            var set_height = $('.projects').height();
            $('.content').css({'height':set_height});
            $('.content').css({'height':$('.projects').height()});
        });

        menu_hidden.live('click', function(event) {

            event.preventDefault();

            var viewport = $(window).width();
            var totalems = parseInt($(viewport).toEm(), 10); // viewport width
            var set_active = $('.set-active').width();

            // adjust menu speed
            if (totalems >= 120) {
                var duration = 1200;
                $('#menu a').css({
                    '-moz-transition-duration':duration + 'ms',
                    '-webkit-transition-duration':duration + 'ms',
                    'transition-duration':duration + 'ms'
                });
            } else if (totalems >= 80) {
                var duration = 1000;
                $('#menu a').css({
                    '-moz-transition-duration':duration + 'ms',
                    '-webkit-transition-duration':duration + 'ms',
                    'transition-duration':duration + 'ms'
                });
            } else {
                var duration = 800;
                $('#menu a').css({
                    '-moz-transition-duration':duration + 'ms',
                    '-webkit-transition-duration':duration + 'ms',
                    'transition-duration':duration + 'ms'
                });
            };

            // animated height adjustment
            if ($('#menu a.menu-active').prev().length != 0) {
                var set_height = $('#projects').height(); // projects section height
                content.animate({
                    'height':set_height
                },{
                    queue:false, duration:duration, easing:easing
                });
            } else if ($('#menu a.menu-active').prev().length == 0) {
                var set_height = $('#profile').height(); // profile section height
                content.animate({
                    'height':set_height
                },{
                    queue:false, duration:duration, easing:easing
                });
            };

            // animated page navigation
            if (!$(this).is(':animated')) {
                if ($('#menu a.menu-active').prev().length != 0) { // from profile to projects
                    $('#menu a.menu-item:first-child').addClass('menu-active').removeClass('menu-hidden');
                    $('#menu a.menu-item:first-child').siblings().addClass('menu-hidden').removeClass('menu-active');
                    $('#menu a.menu-active').mouseleave(function() {
                        $('#menu a.menu-active').addClass('menu-shiver');
                        $('#menu a.menu-active').siblings().removeClass('menu-shiver');
                    });
                    $('#profile').animate({ // move left off screen
                        'left':'-100%','right':'100%','width':set_active,'opacity':'0'
                    }, {
                        queue:false, duration:duration, easing:easing,
                        complete: function() {
                            $(this).addClass('set-hidden').removeClass('set-active');
                        }
                    });
                    $('#projects').animate({ // move left into screen
                        'left':'0%','right':'0%','width':set_active,'opacity':'1'
                    }, {
                        queue:false, duration:duration, easing:easing,
                        complete: function() {
                            $(this).addClass('set-active').removeClass('set-hidden');
                            footer_extend();
                        }
                    });
                    if (window.innerWidth >= 1920) {
                        $('#menu #arrow').animate({'left':'37.5%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    } else if (totalems >= 80) {
                        $('#menu #arrow').animate({'left':'41.666666666666666%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    } else if (totalems >= 40) {
                        $('#menu #arrow').animate({'left':'37.5%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    } else {
                        $('#menu #arrow').animate({'left':'25%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    };
                } else if ($('#menu a.menu-active').prev().length == 0) { // from projects to profile
                    $('#menu a.menu-item:first-child').addClass('menu-hidden').removeClass('menu-active');
                    $('#menu a.menu-item:first-child').siblings().addClass('menu-active').removeClass('menu-hidden');
                    $('#menu a.menu-active').mouseleave(function() {
                        $('#menu a.menu-active').addClass('menu-shiver');
                        $('#menu a.menu-active').siblings().removeClass('menu-shiver');
                    });
                    $('#projects').animate({ // move right off screen
                        'left':'100%','right':'-100%','width':set_active,'opacity':'0'
                    }, {
                        queue:false, duration:duration, easing:easing,
                        complete: function() {
                            $(this).addClass('set-hidden').removeClass('set-active');
                        }
                    });
                    $('#profile').animate({ // move right into screen
                        'left':'0%','right':'0%','width':set_active,'opacity':'1'
                    }, {
                        queue:false, duration:duration, easing:easing,
                        complete: function() {
                            $(this).addClass('set-active').removeClass('set-hidden');
                            footer_extend();
                        }
                    });
                    if (window.innerWidth >= 1920) {
                        $('#menu #arrow').animate({'left':'62.5%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    } else if (totalems >= 80) {
                        $('#menu #arrow').animate({'left':'58.333333333333333%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    } else if (totalems >= 40) {
                        $('#menu #arrow').animate({'left':'62.5%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    } else {
                        $('#menu #arrow').animate({'left':'75%'}, {
                            queue:false, duration:duration, easing:easing
                        });
                    };
                };
            };

            // reset menu speed
            $('#menu a').css({
                '-moz-transition-duration':'400ms',
                '-webkit-transition-duration':'400ms',
                'transition-duration':'400ms'
            });

        }); // end of menu_hidden click function

    }; // end of index only function

    menu_active.live('click', function(event) {
        event.preventDefault();
    });

    // on window resize
    perform = false;
    $(window).resize(function () {perform = true;});
    setInterval(function() {
        if (perform) {
            perform = false;
            if ($('.content .set-active').prev().length != 0) { // keep as projects
                $('#projects').replaceWith($project);
                $('#profile').replaceWith($profile);
                $project = $('#projects').clone();
                $profile = $('#profile').clone();
            } else { // keep as profile
                $('#projects').replaceWith($project);
                $('#profile').replaceWith($profile);
                $project = $('#projects').clone();
                $profile = $('#profile').clone();
                $('.content #projects').removeClass('set-active').addClass('set-hidden');
                $('.content #profile').removeClass('set-hidden').addClass('set-active');
                $('.content #projects').css({'left':'100%','right':'-100%','width':$(".set-active").width()});
                $('.content #profile').css({'left':'0','right':'0'});
            };
            change_project();  // create project grid
            change_arrow();	   // determine arrow placement
            // height adjustment on resize
            var set_height = $('.content .set-active').height();
            $('.content').css({'height':set_height});
            footer_extend();
        };
    }, 10);

});

// create project grid
function change_project() {
    var first_col = $(document.createElement('div'));
    first_col.addClass('first column');
    var second_col = $(document.createElement('div'));
    second_col.addClass('second column');
    var third_col = $(document.createElement('div'));
    third_col.addClass('third column');
    var fourth_col = $(document.createElement('div'));
    fourth_col.addClass('fourth column');
    var viewport = $(window).width();
    var totalems = parseInt($(viewport).toEm(), 10); // viewport width
    var imgheight = $('img', '#projects .article').height();
    var maxheight = parseInt($(imgheight).toEm(), 10); // thumbnail height
    col_counter = 1;
    var projects_set = $('#projects');
    var projects_article = $('#projects .article');
    var projects_img = $('img', '#projects .article');
    if (totalems >= 120) {
        projects_article.each(function(index) {
            $('.column', '#projects').css({'float':'left','position':'relative','width':'25%'});
            $(this).css({'float':'none','width':'100%'});
            if (col_counter == 1) {
                $(this).appendTo(first_col); col_counter++;
            } else if (col_counter == 2) {
                $(this).appendTo(second_col); col_counter++;
            } else if (col_counter == 3) {
                $(this).appendTo(third_col); col_counter++;
            } else {
                $(this).appendTo(fourth_col); col_counter = 1;
            };
            if (projects_set.length == 1) {
                projects_set.append(first_col).append(second_col).append(third_col).append(fourth_col);
            };
        });
    } else if (totalems >= 80) {
        projects_article.each(function(index) {
            $('.column', '#projects').css({'float':'left','position':'relative','width':'33.333333333333333%'});
            $(this).css({'float':'none','width':'100%'});
            if (col_counter == 1) {
                $(this).appendTo(first_col); col_counter++;
            } else if (col_counter == 2) {
                $(this).appendTo(second_col); col_counter++;
            } else {
                $(this).appendTo(third_col); col_counter = 1;
            };
            if (projects_set.length == 1) {
                projects_set.append(first_col).append(second_col).append(third_col).append(fourth_col);
            };
        });
    } else if (totalems >= 40) {
        projects_article.each(function(index) {
            $('.column', '#projects').css({'float':'left','position':'relative','width':'50%'});
            $(this).css({'float':'none','width':'100%'});
            if (col_counter == 1) {
                $(this).appendTo(first_col); col_counter++;
            } else {
                $(this).appendTo(second_col); col_counter--;
            };
            if (projects_set.length == 1) {
                projects_set.append(first_col).append(second_col).append(third_col).append(fourth_col);
            };
        });
    } else {
        projects_article.each(function(index) {
            $('.column', '#projects').css({'float':'none','position':'relative','width':'100%'});
            $(this).css({'float':'none','width':'100%'});
            $(this).appendTo(first_col);
            if (projects_set.length == 1) {
                projects_set.append(first_col).append(second_col).append(third_col).append(fourth_col);
            };
        });
    };
    if ((projects_article.length == 1) && ($('body').hasClass('long'))) {
        projects_img.css({
            'width':'auto',
            'max-width':'100%',
            'height':'auto',
            'max-height':'auto'
        });
    } else if (projects_article.length == 1) {
        $('#projects .column').css({'float':'none','width':'100%'});
        projects_img.css({
            'width':'auto',
            'max-width':'100%',
            'height':'auto',
            'max-height':'55em'
        });
    };
};

// determine arrow placement
function change_arrow() {
    var viewport = $(window).width();
    var totalems = parseInt($(viewport).toEm(), 10); // viewport width
    if ($('#content .set-active').prev().length == 0) {
        if (totalems >= 120) {
            $('#menu #arrow').css({'left':'62.5%'});
        } else if (totalems >= 80) {
            $('#menu #arrow').css({'left':'58.333333333333333%'});
        } else if (totalems >= 40) {
            $('#menu #arrow').css({'left':'62.5%'});
        } else {
            $('#menu #arrow').css({'left':'75%'});
        };
    } else if ($('#content .set-active').prev().length != 0) {
        if (totalems >= 120) {
            $('#menu #arrow').css({'left':'37.5%'});
        } else if (totalems >= 80) {
            $('#menu #arrow').css({'left':'41.666666666666666%'});
        } else if (totalems >= 40) {
            $('#menu #arrow').css({'left':'37.5%'});
        } else {
            $('#menu #arrow').css({'left':'25%'});
        };
    };
};

// background image parallax
if ((totalems >= 40) || (!Modernizr.touch)) {
    (function ($) {
        var xPos = '50%';
        var inertia = 0.15;
        var initial = $('#header').offset().top;
        function move() {
            var scrollPos = $(window).scrollTop();
            var yHeight = $('#header').outerHeight(true);
            if (initial + yHeight < scrollPos || initial > scrollPos + $(window).height()) {
                return;
            };
            $('#header').css('backgroundPosition', xPos + ' ' + ((initial - scrollPos) * inertia) + 'px');
        };
        move();
        $(window).bind('scroll', move).resize(move);
    })(jQuery);
};

// animated scroll to nav
(function ($) {
    var duration = 1200;
    var easing = 'easeInOutCubic';
    $('#author a').live('click',function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#nav').offset().top
        }, duration, easing)
    });
    $('#statement a[href*="projects"]').live('click',function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#nav').offset().top
        }, duration, easing)
    });
})(jQuery);

// footer height adjustment
function footer_extend() {
    var footer = $('.footer');
    footer.css({'padding-bottom':'0'});
    var page_height = $('body').height();
    var window_height = $(window).height();
    var footer_padding = window_height - page_height;
    if ((window_height - page_height) >= 0) {
        footer.css({'padding-bottom':footer_padding});
    } else {
        footer.css({'padding-bottom':'0'});
    };
};

// footer hover changes
var footer = $('.footer');
var social_duration = 100;
var social_easing = 'easeInOutCubic';
var social_item = $('.social-item');
var social_span = $('.social-item a span');
var border_color = '#ccc';
var	social_reset = 'transparent';
var footer_reset = function () {
    footer.animate({
        borderColor:border_color,
        backgroundColor:social_reset // social_reset
    }, {queue:false, duration:social_duration, easing:social_easing});
};
if ((totalems >= 40) || (!Modernizr.touch)) {
    $(social_span).css({
        'border-bottom-width':'0'
    });
    $(social_item).hover(function() {
        social_item.toggleClass('social-item-white'); // color: #fff
    });
    $('.social-dribbble', '#social').hover(function() {
        footer.animate({
            borderColor:'#EA4C89',
            backgroundColor:'#EA4C89'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-fiftytwo', '#social').hover(function() {
        footer.animate({
            borderColor:'#00425C',
            backgroundColor:'#00425C'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-gimmebar', '#social').hover(function() {
        footer.animate({
            borderColor:'#D6156C',
            backgroundColor:'#D6156C'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-google', '#social').hover(function() {
        footer.animate({
            borderColor:'#D14836',
            backgroundColor:'#D14836'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-hypem', '#social').hover(function() {
        footer.animate({
            borderColor:'#83C441',
            backgroundColor:'#83C441'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-instagram', '#social').hover(function() {
        footer.animate({
            borderColor:'#40729C',
            backgroundColor:'#40729C'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-pinterest', '#social').hover(function() {
        footer.animate({
            borderColor:'#cb2027',
            backgroundColor:'#cb2027'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-soundcloud', '#social').hover(function() {
        footer.animate({
            borderColor:'#ff6600',
            backgroundColor:'#ff6600'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-svpply', '#social').hover(function() {
        footer.animate({
            borderColor:'#000000',
            backgroundColor:'#000000'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-tumblr', '#social').hover(function() {
        footer.animate({
            borderColor:'#2C4762',
            backgroundColor:'#2C4762'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-twitter', '#social').hover(function() {
        footer.animate({
            borderColor:'#0084B4',
            backgroundColor:'#0084B4'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
    $('.social-workhours', '#social').hover(function() {
        footer.animate({
            borderColor:'#999999',
            backgroundColor:'#999999'
        }, {queue:false, duration:social_duration, easing:social_easing});
    }, footer_reset);
};

// Hide URL Bar for iOS
// http://remysharp.com/2010/08/05/doing-it-right-skipping-the-iphone-url-bar/
/*
(function(document){
	var userHasNotScrolled = true;
	$(window).on('touchmove', function(e) {
	        userHasNotScrolled = false;
	});
	/mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
	  if (userHasNotScrolled == true) window.scrollTo(0, 1);
	}, 1000);
})(document);
*/

/*
// Widow Tamer
// https://github.com/nathanford/widowtamer
wt.fix({
	elements: 'p,li,dd,.project h1,.project h3',
	chars: 7,
	method: 'nbsp',
	event: 'resize'
});
wt.fix({
	elements: '.project-title a,.project-excerpt p',
	chars: 12,
	method: 'nbsp',
	event: 'resize'
});
*/
