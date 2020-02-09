$(document).ready(function () {
    $('.button[filter]').click(function () {
       if ($(this).attr('vol') == 'off') {
          $('.button[filter]').attr('vol', 'off').removeClass('focused');
          $(this).attr('vol', 'on').addClass('focused');
          $('.filter > div').hide(300);
          $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
          if ($(this).attr('filter') == 'all') {
             $('.button[filter]').attr('vol', 'off').removeClass('focused');
             $(this).attr('vol', 'on').addClass('focused');
             $('.filter > div').show(300);
          }
       }
    })
});