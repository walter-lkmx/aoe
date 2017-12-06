/*import Typed from 'typed.js';
export default {
  init() {
    // JavaScript to be fired on the about us page
    // Typed animation
    var options = {
      strings: ["<span class=\"social\">it\'s social</span>", "<span class=\"engagement\">it\'s engaging</span>", "<span  class=\"management\">it\'s manageable</span>", "<span  class=\"measurement\">it\'s measurable</span>"],
      typeSpeed: 130,
      loop: true,
      loopCount: Infinity,
      autoInsertCss: true,
      startDelay: 1000,
      backDelay: 2000,
    }
    var typed = new Typed(".element", options);
    typed
    // StickyBits
    $(window).resize(function() {
      if ($(window).width() >= 920) {
        $('.sticky-features').stickybits({
          useStickyClasses: true,
          stickyBitStickyOffset: 65,
        });
      }
    });

    // Collisions
    // test if one element overlaps another
    // setInterval(function() {
    //     $('#div2').overlaps('#div1').css({
    //         opacity: '0.5',
    //     })
    // }, 200);

    var overlap = $('#div2').overlaps('#div1');

    setInterval(function() {
      if (overlap) {
        // $('#div1').css('opacity', '0.5');
      } else {
        $('#div1').css('opacity', '1');
      }
    }, 200);
  },
};*/
