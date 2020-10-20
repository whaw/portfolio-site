const topButton = {
  $topButton: $('.top-btn'),

  showButton(){
    let screenTop = $(window).scrollTop();
    let heroHeight = $('header').outerHeight();
    screenTop < heroHeight ? this.render(true) : this.render(false);
  },
  render(showButton){
    showButton ? this.$topButton.removeClass('show') : this.$topButton.addClass('show');
  }
}

$(document).ready(function(){
  topButton.showButton();

  $(window).on('scroll', function(){
    topButton.showButton();
  })
});
