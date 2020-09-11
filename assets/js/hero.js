var heroAnim = {
  playing: false,
  animElements: ['js_frame', 'js_rider', 'js_pin', 'js_signature'],
  init: function(){
    this.addAnimElements();
    this.render();
  },
  addAnimElements: function(){
    this.animElements.forEach(element => {
      var objectProp = this.convertName(element);
      heroAnim[objectProp] = $.makeArray($('.' + element));
    });
  },
  convertName: function(element){
    return '$' + element.replace('js_', '');
  },
  render: function(){
   this.animate(this.$frame);
   this.animate(this.$rider);
   setTimeout(function(){
    heroAnim.animate(heroAnim.$pin, 'staggered');
   }, 5000);
  },
  animate: function(array, animType){
    array.forEach((element, i) => {
      if (animType == 'staggered'){
        setTimeout(function(){
          $(element).addClass('animate');
         }, 1000);
      } else {
        $(element).addClass('animate');
      }
    });
  }
}

$('document').ready(function(){
  heroAnim.init();


  // confirm usable format
});