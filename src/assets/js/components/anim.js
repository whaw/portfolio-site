class Anim {
  constructor(){
    this.hasPlayed = false;
    this.animElements = {};
    this.animContainer = String;
  }
  init(){
    this.addAnimElements();
    this.bindEvents();
    this.inViewport(this.animContainer);
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
  cacheDom(prop, el){
    this[prop] = $.makeArray($('.' + el));
  }
  bindEvents(){
    window.addEventListener('scroll',(e) => this.inViewport(this.animContainer) );
  }
  inViewport(el){
    let screenTop = $(window).scrollTop();
    let elementTop = $(el).offset().top;
    let screenBottom = screenTop + $(window).innerHeight();
    let elementHeight = $(el).outerHeight();
    let threeQuartersHeight = elementTop + (elementHeight * .75);
    if ((screenBottom > threeQuartersHeight) && (screenTop < elementTop)){
      this.render();
      this.hasPlayed = true;
    }
  }
  /* render(){
    handle animation timing in child classes
  }*/
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
