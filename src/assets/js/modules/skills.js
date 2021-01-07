import Anim from '/src/assets/js/modules/anim';

// Left this unpacked here for higher priorities +
// it allows for more flexibility as aniamations are works in progress.
// May refactor Anim class later to not need this.

const SkillsAnim = Anim.create({
  animElements: ['js_skills'],
  animContainer: '.js_skills__content',
  render: function(){
    setTimeout( () => {
      this.animate(this.$skills);
    }, 500);
  }
});

export default SkillsAnim;
