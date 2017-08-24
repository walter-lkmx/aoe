export default {
  init() {
    // JavaScript to be fired on the subscribe page


    $(".plans > li > a").click(function(e) {
      e.preventDefault();
      var cleanCart = '/?empty-cart=clearcart';
      var targetUrl = $(this).attr('rel');
      $.ajax({
        url: cleanCart,
        type: "GET",
        success: function() {
          setTimeout(function() {
            $.ajax({
              url: targetUrl,
              type: "GET",
              success: function() {
                window.location.href = "/checkout/"
              },
            }, 5000);
          })
        },
      });
    });
  },

  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    $(document).on({
      ajaxStart: function() { $("body.template-subscribe").addClass("loading").append("<div class=\"loader-inner triangle-skew-spin\"><div></div>"); },
      // ajaxStop: function() {
      //   $("body.template-subscribe").removeClass("loading");
      //   $(".loader-inner").css({
      //     display: 'none',
      //   });
      // },
    });
  },
};
