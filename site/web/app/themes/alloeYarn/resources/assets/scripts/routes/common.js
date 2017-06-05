export default {
    init() {
            // JavaScript to be fired on all pages
            // loader
            $(document).ready(function() {
                $("body").addClass('initial-display');
            });


            $(document).ready(function() {

                // subscribe now overlay  
                var resetCart = function(obj) {
                    var targetUrl = obj.attr('rel');
                    $.ajax({
                        url: targetUrl,
                        type: "GET",
                    });
                };
                var animationSubscribe = function() {
                    $(".subscribe").show().addClass('animated fadeInDown');
                    setTimeout(function() {
                        $('.subscribe').removeClass('animated fadeInDown');
                    }, 2000);
                    $("html").addClass('freezeBody');
                };
                $("#show-subscribe").click(function() {
                    animationSubscribe();
                    resetCart($(this));
                });
                $("#welcome-show-subscribe").click(function() {
                    animationSubscribe();
                    resetCart($(this));
                });
                $("#simpleAs-show-subscribe").click(function() {
                    animationSubscribe();
                    resetCart($(this));
                });
                $("#change-plan").click(function() {
                    animationSubscribe();
                    resetCart($(this));
                });
                // hide now overlay
                $("#hide-subscribe").click(function() {
                    $(".subscribe").addClass('animated fadeOutUp');
                    setTimeout(function() {
                        $('.subscribe').removeClass('animated fadeOutUp freezeBody').hide();
                    }, 1000);
                    $("html").removeClass('freezeBody');
                });
                // add to cart buttons in subscription with redirection
                // $("#addToCartMonthly, #addToCartYearly, #addToCartCustomized").click(function() {
                //     $(this).addClass('loading');
                //     setTimeout(function() {
                //         window.location.href = "/checkout/"
                //     }, 2000);
                // });


                var timeOut = function() {
                    setTimeout(function() {
                        window.location.href = "/checkout/"
                    }, 2000);
                };

                $("#addToCartYearly").click(function(e) {
                    timeOut();
                    e.preventDefault();
                    var targetUrl = $(this).attr('rel');
                    $.ajax({
                        url: targetUrl,
                        type: "GET",
                    });
                    $(this).addClass('loading');
                    $('.legendYearly').hide();
                    $('.loaderYearly').css({
                        display: 'initial',
                    });
                });

                $("#addToCartCustomized").click(function(e) {
                    timeOut();
                    e.preventDefault();
                    var targetUrl = $(this).attr('rel');
                    $.ajax({
                        url: targetUrl,
                        type: "GET",
                    });
                    $(this).addClass('loading');
                    $('.legendCustomized').hide();
                    $('.loaderCustomized').css({
                        display: 'initial',
                    });
                });

                $("#addToCartMonthly").click(function(e) {
                    timeOut();
                    e.preventDefault();
                    var targetUrl = $(this).attr('rel');
                    $.ajax({
                        url: targetUrl,
                        type: "GET",
                    });
                    $(this).addClass('loading');
                    $('.legendMonthly').hide();
                    $('.loaderMonthly').css({
                        display: 'initial',
                    });
                });

                // button
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
                }, 5000);
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
