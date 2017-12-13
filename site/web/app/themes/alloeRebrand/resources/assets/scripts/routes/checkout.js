/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
export default {
  init() {

    $('html,body').animate({
        scrollTop: $("header").offset().top}, 'slow');

    $(document).on({
      ajaxStop: function() {
        var monthlySubscription = $('.product-name > h2 > span.get-name:contains(Monthly)');
        monthlySubscription.addClass('monthly');
        monthlySubscription.parent('h2').addClass('monthly');

        var yearlySubscription = $('.product-name > h2 > span.get-name:contains(Yearly)');
        yearlySubscription.addClass('yearly');
        yearlySubscription.parent('h2').addClass('yearly');
      },
    });
    // $( "#billing_address_1_field" ).attr('data-priority', '30');
    $("#billing_address_1_field").insertBefore('#billing_country_field');
    $("#place_order").attr('onclick', 'objectifyForm()');
    $(".xdebug-error").remove();

    $("#place_order").submit(function(event) {
      alert($(this).serializeArray());
      event.preventDefault();
    });

  },

  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    //     (function ($) {
    //     $.fn.serializeFormJSON = function () {

    //         var o = {};
    //         var a = this.serializeArray();
    //         $.each(a, function () {
    //             if (o[this.name]) {
    //                 if (!o[this.name].push) {
    //                     o[this.name] = [o[this.name]];
    //                 }
    //                 o[this.name].push(this.value || '');
    //             } else {
    //                 o[this.name] = this.value || '';
    //             }
    //         });
    //         return o;
    //     };
    // })(jQuery);

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     var customerData = $(this).serializeFormJSON();
    //     console.log(customerData);
    //     $.ajax({
    //       type: "POST",
    //       data :JSON.stringify(customerData),
    //       url: "http://putsreq.com/OgxE4ZaepCbPy5rN2i0g",
    //       contentType: "application/json",
    //     });
    // });

    //     $(function () {
    //     var customer = customerData;
    //     $.ajax({
    //         type: "POST",
    //         data :JSON.stringify(customer),
    //         url: "http://httpbin.org/get?show_env=1",
    //         contentType: "application/json"
    //     });
    // });
  },
};



// billing_company_field
