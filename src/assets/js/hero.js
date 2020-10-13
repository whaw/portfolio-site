class HeroAnim extends Anim {
  constructor(){
    super();
    this.animElements = ['js_frame', 'js_rider', 'js_pin', 'js_logo', 'js_hero'];
    this.animContainer = '.js_hero';
  }
  render(){
    this.animate(this.$hero);
    this.animate(this.$frame);
    this.animate(this.$rider);
    setTimeout( () => {
      this.animate(this.$pin, 'staggered');
    }, 4000);
    this.animate(this.$logo);
  }
}
$('document').ready(function(){
  const heroAnim = new HeroAnim;
  if (heroAnim.hasPlayed == false){
    heroAnim.init();
  }
});
