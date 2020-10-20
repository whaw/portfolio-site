const skillsAnim = anim.create({
  animElements: ['js_skills'],
  animContainer: '.js_skills__content',
  render: function(){
    setTimeout( () => {
      this.animate(this.$skills);
    }, 500);
  }
});

$('document').ready(function(){
  skillsAnim.init();
});
