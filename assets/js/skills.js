(function(){
  var Skills = {
    hasPlayed: false,
    animElements: ['js_skills'],
    init: function(){
      this.addAnimElements();
      this.bindEvents();
      this.render();
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
        this.isShowing()
      });
    },
    isShowing: function(){
      var scrollPos = window.scrollY;
    },
    render: function(){
     this.animate(this.$skills);
    },
    animate: function(arr){
      arr.forEach((el) => {
        $(el).addClass('animate');
      });
    }
  }
  
  $('document').ready(function(){
    function check(){
      if (Skills.hasPlayed == false){
        var top_of_screen = $(window).scrollTop();
        var top_of_element = $(".js_skills__content").offset().top;
        var bottom_of_screen = top_of_screen + $(window).innerHeight();
        var elementHeight = $(".js_skills__content").outerHeight();
        var threeQuartersHeight = top_of_element + (elementHeight * .75);

        if ((bottom_of_screen > threeQuartersHeight) && (top_of_screen < top_of_element)){
            Skills.hasPlayed = true;
            setTimeout(function(){
              Skills.init();
            }, 1500);
        }
      }
    }
    check();

    $(window).scroll(function() {
      check();
    });

  });
})()

