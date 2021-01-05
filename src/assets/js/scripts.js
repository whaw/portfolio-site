  // add smooth scroll
  $(function(){
  $('a').on('click', function() {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });
});
