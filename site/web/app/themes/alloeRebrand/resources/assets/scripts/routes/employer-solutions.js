import Typed from 'typed.js';

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
    $('.sticky-features').stickybits({ useStickyClasses: true, stickyBitStickyOffset: 65 });

    
  },
};
