class Hero extends Anim {
  constructor(){
    super();
    this.animElements = ['js_frame', 'js_rider', 'js_pin', 'js_logo', 'js_hero']
  }
  init(){
    this.addAnimElements();
    this.render();
  }
  render(){
    this.animate(this.$hero);
    this.animate(this.$frame);
    this.animate(this.$rider);
    var self = this;
    setTimeout(function(){
      self.animate(self.$pin, 'staggered');
    }, 4000);
  this.animate(this.$logo);
  }
}
$('document').ready(function(){
  let hero = new Hero;
  hero.init();
});
  

