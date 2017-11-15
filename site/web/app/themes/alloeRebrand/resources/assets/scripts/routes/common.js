/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

export default {
  init() {
    // menu 
    $("nav.mobile-menu").click(function(){
      $("nav.nav-primary").slideToggle('fast');
    });

    $(".widget_categories > h3").click(function(){
      $(".widget_categories > ul").slideToggle('fast');
    });

    // JavaScript to be fired on all pages
    $(document).ready(function() {
      $('.banner').stickybits({ useStickyClasses: true });
      $("body").addClass('initial-display');
    });

    $("body.blog > .wrap > .content > .main").insertAfter('.sidebar'); 
    $("body.archive > .wrap > .content > .main").insertAfter('.sidebar'); 
    $("article > header, article > .entry-summary").wrap('<div class="content"></div>'); 

    // redirect from orders to subscriptions
    // similar behavior as an HTTP redirect
    // window.location.replace("http://stackoverflow.com");
    var accountUrl = window.location.href;
    if(accountUrl == 'http://www-alloe.staging.lkmx.io/my-account/orders/'){
      console.log('accountUrl');
      window.location.replace("http://www-alloe.staging.lkmx.io/my-account/subscriptions/");
    } else if (accountUrl == 'http://www-alloe.staging.lkmx.io/my-account/downloads'){
      window.location.replace("http://www-alloe.staging.lkmx.io/my-account/subscriptions/");
    } else if (accountUrl == 'http://www-alloe.staging.lkmx.io/my-account'){
      window.location.replace("http://www-alloe.staging.lkmx.io/my-account/subscriptions/");
    } else {
      // lol
    }


  },


  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is 
    // stickybits
   
  },
};
