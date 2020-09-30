
$(document).ready(function(){

  // MAIN NAV
  // smooth scrolls
  $(".nav-link").click(function () {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });
  // resolve for scrollspy nav highlighting miss
  $('body').scrollspy({
    offset: 50
  });
});