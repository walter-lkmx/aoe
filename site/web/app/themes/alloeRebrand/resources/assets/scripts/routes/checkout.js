export default {
  init() {

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
  },

  finalize() {
    // JavaScript to be fired on the home page, after the init JS


  },
};
