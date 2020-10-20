const heroAnim = anim.create({
  animElements: ['js_frame', 'js_rider', 'js_pin', 'js_logo', 'js_hero'],
  animContainer: '.js_hero',
  render: function(){
    this.animate(this.$hero);
    this.animate(this.$frame);
    this.animate(this.$rider);
    setTimeout( () => {
      this.animate(this.$pin, 'staggered');
    }, 4000);
    this.animate(this.$logo);
  }
});

$('document').ready(function(){
  heroAnim.init();
});
