(function(){
  var Skills = {
    hasPlayed: false,
    animElements: ['js_skills'],
    init: function(){
      this.addAnimElements();
      this.bindEvents();
      this.inViewport();
    },
    addAnimElements: function(){
      this.animElements.forEach(el => {
        var prop = this.convertName(el);
        this.cacheDom(prop, el);
      });
    },
    convertName: function(el){
      return '$' + el.replace('js_', '');
    },
    cacheDom: function(prop, el){
      this[prop] = $.makeArray($('.' + el));
    },
    bindEvents: function(){
      window.addEventListener('scroll',(e) => {
        this.inViewport()
      });
    },
    inViewport: function(){
      var screenTop = $(window).scrollTop();
      var elementTop = $(".js_skills__content").offset().top;
      var screenBottom = screenTop + $(window).innerHeight();
      var elementHeight = $(".js_skills__content").outerHeight();
      var threeQuartersHeight = elementTop + (elementHeight * .75);
      if ((screenBottom > threeQuartersHeight) && (screenTop < elementTop)){
        this.render();
        this.hasPlayed = true;
      }
    },
    render: function(){
      setTimeout(function(){
        Skills.animate(Skills.$skills);
      }, 500);
    },
    animate: function(arr){
      arr.forEach((el) => {
        $(el).addClass('animate');
      });
    }
  }
  $('document').ready(function(){
    if (Skills.hasPlayed == false){
      Skills.init();
    }
  });
})()

