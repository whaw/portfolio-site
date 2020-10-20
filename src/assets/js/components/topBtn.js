const topButton = {
  $topButton: $('.top-btn'),
  $hero: $('header'),

  showButton(){
    let screenTop = $(window).scrollTop();
    let heroHeight = this.$hero.outerHeight();
    screenTop > heroHeight ? this.render(true) : this.render(false);
  },
  render(showButton){
    showButton ? this.$topButton.addClass('show') : this.$topButton.removeClass('show');
  }
}

$(document).ready(function(){
  topButton.showButton();

  $(window).on('scroll', function(){
    topButton.showButton();
  })
});
