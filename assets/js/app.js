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
      
      var $popover = $('#popover');
      var $popover_hack = $('#popover-wrapper');
      
      
      $("#add_checkin_button").on('click', function(evt) {
        evt.preventDefault();
        $popover_hack.css('display', 'block');
        var checkInAddView = new CheckInAddView();
        checkInAddView.render();
        return false;
      });
      
      $popover_hack.on('click', function(evt){
        evt.preventDefault();
        $popover_hack.css('display', 'none');
        return false;
      });
      
      $popover.on('click', function(evt){
        console.log('popover clicked');
        evt.preventDefault();
        return false;
      });
      
      Router.initialize();
      
    };

    return {
      initialize: initialize,
    };
  }
);
