export default {
  init() {
    // JavaScript to be fired on the home page
    $(".app-screens").unslider({
      autoplay: true,
      animation: 'fade',
      delay: '10000',
      speed: 1000,
    });
    $(".stats").unslider({
      autoplay: true,
      animation: 'vertical',
      delay: '4000',
      speed: 250,
    });


    // animated numbers

    // animated calories
    var decimal_places = 1;
    var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

    // animated steps
    function animatedSteps() {
      $('#animated-steps').prop('number', 2).animateNumber({ number: 10 }, 4000);
      setTimeout(function() {
        animatedCalories();
      }, 4000);
    }

    function animatedCalories() {
      $('#animated-calories').prop('number', 1.1).animateNumber({
        number: 3.5 * decimal_factor,
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now) / decimal_factor,
            target = $(tween.elem);

          if (decimal_places > 0) {
            // force decimal places even if they are 0
            floored_number = floored_number.toFixed(decimal_places);

            // replace '.' separator with ','
            floored_number = floored_number.toString().replace('.', '.');
          }

          target.text('' + floored_number);
        },
      }, 4000);

      setTimeout(function() {
        animatedMinutes();
      }, 4000);
    }
    // animated minutes
    function animatedMinutes() {
      $('#animated-minutes').prop('number', 50).animateNumber({ number: 100 }, 4000);

      setTimeout(function() {
        animatedMiles();
        //$('#animated-miles').prop('number', 2).animateNumber({ number: 10 }, 4000);
      }, 4000);
    }
    // animated miles
    function animatedMiles() {
      $('#animated-miles').prop('number', 2).animateNumber({
        number: 3.5 * decimal_factor,
        numberStep: function(now, tween) {
          var floored_number = Math.floor(now) / decimal_factor,
            target = $(tween.elem);

          if (decimal_places > 0) {
            // force decimal places even if they are 0
            floored_number = floored_number.toFixed(decimal_places);

            // replace '.' separator with ','
            floored_number = floored_number.toString().replace('.', '.');
          }

          target.text('' + floored_number);
        },
      }, 4000);
    }

    animatedSteps();
    setInterval(function() {
      animatedSteps();
    }, 16000);

    // alloe it's not just an app
    var counter = 1,
      int = setInterval(function() {
        $(".not-just-app > div").attr("class", "class" + counter);
        if (counter === 4) {
          counter = 1;
        } else {
          counter++;
        }
      }, 10000);
    int
    var detector
    detector = setInterval(function() {
      if ($('.not-just-app > .content').length) {
        // module title
        $(".not-just-app > h2").css({ "color": "#212A34" });
        // message
        $(".not-just-app > section > .feature-social").css({ "display": "none" });
        $(".not-just-app > section > .feature-engagement").css({ "display": "none" });
        $(".not-just-app > section > .feature-management").css({ "display": "none" });
        $(".not-just-app > section > .feature-measurement").css({ "display": "none" });
      } else if ($('.class1').length) {
        // modeule title
        $(".not-just-app > h2").css({ "color": "#fff" });
        $(".not-just-app").addClass("first-letter");
        // message
        $(".not-just-app > section > .feature-social").addClass("slide-in-right").css({ "display": "block" });
        $(".not-just-app > section > .feature-engagement").css({ "display": "none" });
        $(".not-just-app > section > .feature-management").css({ "display": "none" });
        $(".not-just-app > section > .feature-measurement").css({ "display": "none" });
        // active letter
        // $("#alloe-interactive-a").css({ "fill": "white", "stroke": "#212A34" });
        $("#alloe-interactive-ll").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-o").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-ee").css({ "fill": "transparent", "stroke": "#212A34" });
      } else if ($('.class2').length) {
        // module background
        $(".not-just-app").addClass("slide-in-right").css({ "background-color": "#FF0C65" });
        $(".not-just-app").removeClass("first-letter");
        // module title
        $(".not-just-app > h2").css({ "color": "#fff" });
        // message
        $(".not-just-app > section > .feature-social").css({ "display": "none" });
        $(".not-just-app > section > .feature-engagement").addClass("slide-in-left").css({ "display": "block" });
        $(".not-just-app > section > .feature-management").css({ "display": "none" });
        $(".not-just-app > section > .feature-measurement").css({ "display": "none" });
        // active letter
        // $("#alloe-interactive-a").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-ll").css({ "fill": "#fff", "stroke": "#212A34" });
        $("#alloe-interactive-o").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-ee").css({ "fill": "transparent", "stroke": "#212A34" });
      } else if ($('.class3').length) {
        // module background
        $(".not-just-app").addClass("slide-in-left").css({ "background-color": "#FFCC00" });
        // module title
        $(".not-just-app > h2").css({ "color": "#fff" });
        // message
        $(".not-just-app > section > .feature-social").css({ "display": "none" });
        $(".not-just-app > section > .feature-engagement").css({ "display": "none" });
        $(".not-just-app > section > .feature-management").addClass("slide-in-right").css({ "display": "block" });
        $(".not-just-app > section > .feature-measurement").css({ "display": "none" });
        // active letter
        // $("#alloe-interactive-a").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-ll").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-o").css({ "fill": "#fff", "stroke": "#212A34" });
        $("#alloe-interactive-ee").css({ "fill": "transparent", "stroke": "#212A34" });
      } else if ($('.class4').length) {
        // module background
        $(".not-just-app").addClass("slide-in-right").css({ "background-color": "#5000C5" });
        // module title
        $(".not-just-app > h2").css({ "color": "#fff" });
        // message
        $(".not-just-app > section > .feature-social").css({ "display": "none" });
        $(".not-just-app > section > .feature-engagement").css({ "display": "none" });
        $(".not-just-app > section > .feature-management").css({ "display": "none" });
        $(".not-just-app > section > .feature-measurement").addClass("slide-in-left").css({ "display": "block" });
        // active letter
        // $("#alloe-interactive-a").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-ll").css({ "fill": "transparent", "stroke": "#212A34" });
        $("#alloe-interactive-o").css({ "fill": "transparent", "stroke": "#212A34" }); 
        $("#alloe-interactive-ee").css({ "fill": "#fff", "stroke": "#212A34" });
      }
    }, 500);
    detector
  },

  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
