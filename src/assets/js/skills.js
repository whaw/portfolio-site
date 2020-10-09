class Skills extends Anim {
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
    const self = this;
    setTimeout(function(){
      self.animate(self.$skills);
    }, 500);
  }
}
$('document').ready(function(){
  let skills = new Skills;
  if (skills.hasPlayed == false){
    skills.init();
  }
});