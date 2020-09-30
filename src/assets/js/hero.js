var Hero = {
  animElements: ['js_frame', 'js_rider', 'js_pin', 'js_logo', 'js_hero'],
  init: function(){
    this.addAnimElements();
    this.render();
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
  render: function(){
   this.animate(this.$hero);
   this.animate(this.$frame);
   this.animate(this.$rider);
   setTimeout(function(){
    Hero.animate(Hero.$pin, 'staggered');
   }, 4000);
   this.animate(this.$logo);
  },
  cacheDom: function(prop, el){
    this[prop] = $.makeArray($('.' + el));
  },
  animate: function(arr, animType){
    arr.forEach((element, i) => {
      if (animType == 'staggered'){
        setTimeout(function(){
          $(element).addClass('animate');
        }, i * 300)
      } else {
        $(element).addClass('animate');
      }
    });
  }
}
$('document').ready(function(){
  Hero.init();
});