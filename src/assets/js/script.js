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

$(document).ready(function(){
  // MAIN NAV
  // smooth scrolls
  $(".nav-link").on('click', function () {
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

