$(document).ready(function(){

  // add smooth scroll
  $('a').on('click', function() {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });
});
