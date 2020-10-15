$(function(){
  $('.progressive-image').each(function(){
    var image = new Image();
    var previewImage = $(this).find('.loadingImage');
    var newImage = $(this).find('.overlay');
    image.onload = function(){
      newImage.css('background-image', 'url(' + image.src + ')');
      newImage.css('opacity', '1');
      if (this.complete){
        previewImage.addClass('isLoaded');
      }
    };
    image.src = previewImage.data('image');
  });
});

function updateScrollSpy() {
  $('[data-spy="scroll"]').each( () => {
    var $spy = $(this).scrollspy('refresh')
  });
}

$(document).ready(function(){
  // reset scrollspy on page load/refresh
  setTimeout(updateScrollSpy, 1000);

  // adjust scrollspy nav highlighting
  $('body').scrollspy({
    offset: 50
  });

  // add smooth scroll
  $('a').on('click', function() {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });
});

