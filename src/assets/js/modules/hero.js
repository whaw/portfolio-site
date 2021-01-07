import Anim from '/src/assets/js/modules/anim';

// Left this unpacked here for higher priorities +
// it allows for more flexibility as aniamations are works in progress.
// May refactor Anim class later to not need this.

const HeroAnim = Anim.create({
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

export default HeroAnim;