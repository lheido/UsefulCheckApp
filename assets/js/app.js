define(
  // deps:
  [
    'jquery', // jquery est exporter dans le main.js donc pas besoin d'arguments au scope.
    'underscore',
    'backbone',
    'router',
    'views/checkin/add',
  ],
  // définition du scope.
  function($, _, Backbone, Router, CheckInAddView) {
    var initialize = function() {
      Router.initialize();
      
      var $popover = $('#popover');
      $popover.toggle();
      
      $("#add_checkin_button").on('click', function(evt) {
        evt.preventDefault();
        $popover.toggle();
        if ($popover.is(':visible')) {
          var checkInAddView = new CheckInAddView();
          checkInAddView.render();
        } else {
          $popover.html('');
        }
        return false;
      });
      
    };

    return {
      initialize: initialize,
    };
  }
);
