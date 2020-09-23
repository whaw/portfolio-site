var Skills = {
  animElements: ['js_skills'],
  init: function(){
    this.addAnimElements();
    this.render();
  },
  addAnimElements: function(){
    this.animElements.forEach(element => {
      var objectProp = this.convertName(element);
      Skills[objectProp] = $.makeArray($('.' + element));
    });
  },
  convertName: function(element){
    return '$' + element.replace('js_', '');
  },
  render: function(){
   this.animate(this.$skills);
  },
  animate: function(arr){
    arr.forEach((element, i) => {
      $(element).addClass('animate');
    });
  }
}

$('document').ready(function(){
  Skills.init();
});