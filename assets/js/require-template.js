define(
  // deps:
  [
    'jquery', // jquery est exporter dans le main.js donc pas besoin d'arguments au scope.
    'underscore',
    'backbone',
  ],
  // définition du scope.
  function($, _, Backbone) {
    var initialize = function() {

    };

    return {
      initialize: initialize,
    };
  }
);
