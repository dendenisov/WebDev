$(document).ready(function() {
    $('.button[filter="wd"]').click(function(){
        if($(this).attr('vol')=='off') {
            $('.button[filter]').attr('vol', 'off');
            $(this).attr('vol', 'on');
            $('.filter > div').hide(600);
            $('.filter > div[filter="wd"]').show(600);
        }
    })

    $('.button[filter="ud"]').click(function(){
        if($(this).attr('vol')=='off') {
            $('.button[filter]').attr('vol', 'off');
            $(this).attr('vol', 'on');
            $('.filter > div').hide(600);
            $('.filter > div[filter="ud"]').show(600);
        }
    });

    $('.button[filter="woc"]').click(function(){
        if($(this).attr('vol')=='off') {
            $('.button[filter]').attr('vol', 'off');
            $(this).attr('vol', 'on');
            $('.filter > div').hide(600);
            $('.filter > div[filter="woc"]').show(600);
        }
    });

    $('.button[filter="all"]').click(function(){
        if($(this).attr('vol')=='off') {
            $('.button[filter]').attr('vol', 'off');
            $(this).attr('vol', 'on');
            $('.filter > div').show(600);
        }
    });
});