class SkillsAnim extends Anim {
  constructor(){
    super();
    this.animElements = ['js_skills'];
    this.animContainer = '.js_skills__content';
  }
  init(){
    this.addAnimElements();
    this.bindEvents();
    this.inViewport(this.animContainer);
  }
  bindEvents(){
    window.addEventListener('scroll',(e) => {
      this.inViewport(this.animContainer)
    });
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