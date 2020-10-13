class Anim {
  constructor(){
    this.hasPlayed = false;
  }
  cacheDom(prop, el){
    this[prop] = $.makeArray($('.' + el));
  }
  addAnimElements(){
    this.animElements.forEach(el => {
      var prop = this.convertName(el);
      this.cacheDom(prop, el);
    });
  }
  convertName(el){
    return '$' + el.replace('js_', '');
  }
  inViewport(el){
    var screenTop = $(window).scrollTop();
    var elementTop = $(el).offset().top;
    var screenBottom = screenTop + $(window).innerHeight();
    var elementHeight = $(el).outerHeight();
    var threeQuartersHeight = elementTop + (elementHeight * .75);
    if ((screenBottom > threeQuartersHeight) && (screenTop < elementTop)){
      this.render();
      this.hasPlayed = true;
    }
  }
  animate(arr, animType = 'none'){
    arr.forEach((el, i) => {
      if (animType == 'staggered'){
        setTimeout(function(){
          $(el).addClass('animate');
        }, i * 300)
      } else {
        $(el).addClass('animate');
      }
    });
  }
}
