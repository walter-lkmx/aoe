export default {
  init() {
    // JavaScript to be fired on all pages
    $(document).ready(function() {
      $('.banner').stickybits({ useStickyClasses: true });
      $("body").addClass('initial-display');
    });

    $("body.blog > .wrap > .content > .main").insertAfter('.sidebar'); 
    $("body.archive > .wrap > .content > .main").insertAfter('.sidebar'); 
    $("article > header, article > .entry-summary").wrap('<div class="content"></div>'); 
  },


  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is 
    // stickybits
   
  },
};
