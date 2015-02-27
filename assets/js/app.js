define(
  // deps:
  [
    'jquery', // jquery est exporter dans le main.js donc pas besoin d'arguments au scope.
    'underscore',
    'backbone',
    'router',
  ],
  // définition du scope.
  function($, _, Backbone, Router) {
    var initialize = function() {
      $('body').html("require c'est cool.");
      Router.initialize();
    };

    return {
      initialize: initialize,
    };
  }
);
