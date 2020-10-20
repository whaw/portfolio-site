class SkillsAnim extends Anim {
  constructor(){
    super();
    this.animElements = ['js_skills'];
    this.animContainer = '.js_skills__content';
  }
  render(){
    setTimeout( () => {
      this.animate(this.$skills);
    }, 500);
  }
}
$('document').ready(function(){
  const skillsAnim = new SkillsAnim;
  if (skillsAnim.hasPlayed == false){
    skillsAnim.init();
  }
});
