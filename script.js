$(document).ready(function() {
    //----- OPEN
    $('[modal-open-1]').on('click', function(e)  {
        var targeted_modal_class = jQuery(this).attr('modal-open-1');
        console.log(targeted_modal_class);
        $('[modal-open="' + targeted_modal_class + '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[modal-close]').on('click', function(e)  {
        var targeted_modal_class = jQuery(this).attr('modal-close');
        $('[modal-open="' + targeted_modal_class + '"]').fadeOut(350);

        e.preventDefault();
    });

    //----- Parallax Scroll
    var documentEl = $(document),
        parallaxBg1 = $('div.welcome-wrap'),
        parallaxBg2 = $('div.menu-wrap');

    documentEl.on('scroll', function(){
        var currScrollPos = documentEl.scrollTop();
        parallaxBg1.css('background-position', '0 ' + -currScrollPos/4 + 'px');
        parallaxBg2.css('background-position', '0 ' + -currScrollPos/4 + 'px');
    });

    //----- Fade To
    // $('.event-img').mouseenter(function(){
    //     console.log('mouseenter');
    //     $(this).fadeTo('slow', 0.50);
    // });
    // $('.event-img').mouseleave(function(){
    //     console.log('mouseleave');
    //     $(this).fadeTo('slow', 1);
    // });
    // $('.event-img').mouseenter(function(){
    //     $('.hover-info').fadeTo('slow', 1);
    // });
    // $('.event-img').mouseleave(function(){
    //     $('.hover-info').fadeTo('slow', 0);
    // });

    //----- Hover (alternate to fade to)
    $('.event-img').hover(function(){
        console.log('hover');
        $(this).fadeTo('slow', 0.50);
    },
    function(){
        console.log('hover');
        $(this).fadeTo('slow', 1);
    });
});
