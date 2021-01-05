import Anim from '/src/assets/js/modules/anim';

const SkillsAnim = Anim.create({
  animElements: ['js_skills'],
  animContainer: '.js_skills__content',
  render: function(){
    setTimeout( () => {
      this.animate(this.$skills);
    }, 500);
  }
});

$(function(){
  SkillsAnim.init();
})
