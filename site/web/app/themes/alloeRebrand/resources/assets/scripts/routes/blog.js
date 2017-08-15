export default {
  init() {
    // JavaScript to be fired on the about us page
    $("body.blog > .wrap > .content > .main").insertAfter('.sidebar'); 
    $("article > header, article > .entry-summary").wrap('<div class="content"></div>'); 
  },
};
