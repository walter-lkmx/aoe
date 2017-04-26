export default {
    init() {
            // JavaScript to be fired on all pages
            $(document).ready(function() {
                $("button").click(function() {
                    $(this).hide();
                });
                // toggle mobile menu
                $(document).ready(function() {
                    $("#hide-menu").click(function() {
                        $(".nav-mobile").hide(400);
                    });
                    $("#show-menu").click(function() {
                        $(".nav-mobile").show();
                    });
                });
                // animated steps
                $('#animated-steps').prop('number', 5).animateNumber({ number: 10 }, 5000);
                // animated calories
                var decimal_places = 1;
                var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

                $('#animated-calories').prop('number', 1.0).animateNumber({
                        number: 2.5 * decimal_factor,

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
                    },
                    5000
                );
                // animated minutes
                $('#animated-minutes').prop('number', 50).animateNumber({ number: 100 }, 5000);
                // animated miles
                $('#animated-miles').prop('number', 2.5).animateNumber({
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
                    },
                    5000
                );
            });
        },
        finalize() {
            // JavaScript to be fired on all pages, after page specific JS is fired
        },

};
