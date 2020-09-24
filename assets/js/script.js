
$(document).ready(function(){

  // MAIN NAV
  // animate link scroll
  $(".nav-link").click(function () {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });
  // resolve for padding in Introductions section body text throwing off scrollspy nav highlighting
  $('body').scrollspy({
    offset: 50
  });

});