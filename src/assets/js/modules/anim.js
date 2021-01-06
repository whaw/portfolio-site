const Anim = {
  hasPlayed: false,
  animElements: [],
  animContainer: '',
  create: function(values){
    var instance = Object.create(this);
    Object.keys(values).forEach(key => {
      instance[key] = values[key];
    });
    return instance;
  },
  init: function(){
    if (this.hasPlayed == false){
      this.addAnimElements();
      this.bindEvents();
      this.inViewport(this.animContainer);
    }
  },
  addAnimElements: function(){
    this.animElements.forEach(el => {
      var prop = this.convertName(el);
      this.cacheDom(prop, el);
    });
  },
  convertName: function(el){
    return '$' + el.replace('js_', '');
  },
  cacheDom: function(prop, el){
    this[prop] = $.makeArray($('.' + el));
  },
  bindEvents: function(){
    window.addEventListener('scroll',(e) => this.inViewport(this.animContainer) );
  },
  inViewport: function(el){
    const screenTop = $(window).scrollTop();
    const elementTop = $(el).offset().top;
    const screenBottom = screenTop + $(window).innerHeight();
    const elementHeight = $(el).outerHeight();
    const threeQuartersHeight = elementTop + (elementHeight * .75);
    if ((screenBottom > threeQuartersHeight) && (screenTop < elementTop)){
      this.render();
      this.hasPlayed = true;
    }
  },
  render: function(){
    // handle animation timing in children
  },
  animate: function(arr, animType = 'none'){
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

export default Anim;
