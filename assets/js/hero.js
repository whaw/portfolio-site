var Hero = {
  animElements: ['js_frame', 'js_rider', 'js_pin', 'js_signature'],
  init: function(){
    this.addAnimElements();
    this.render();
  },
  addAnimElements: function(){
    this.animElements.forEach(element => {
      var objectProp = this.convertName(element);
      Hero[objectProp] = $.makeArray($('.' + element));
    });
  },
  convertName: function(element){
    return '$' + element.replace('js_', '');
  },
  render: function(){
   this.animate(this.$frame);
   this.animate(this.$rider);
   setTimeout(function(){
    Hero.animate(Hero.$pin, 'staggered');
   }, 4000);
   this.animate(this.$signature);
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