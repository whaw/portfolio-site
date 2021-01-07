  // add smooth scroll
import HeroAnim from '/src/assets/js/modules/hero';
import SkillsAnim from '/src/assets/js/modules/skills';
  
$(function(){

  // INIT

  // links
  $('a').on('click', function() {
    var id = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 'slow');
  });

  // animations
  HeroAnim.init();
  SkillsAnim.init();
});
