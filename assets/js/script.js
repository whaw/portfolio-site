
$(document).ready(function(){

  $(".nav-link").click(function () {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });

  // resolve for padding in intro text section throwing off scrollspy nav highlighting
  $('body').scrollspy({
    offset: 50
  });

});