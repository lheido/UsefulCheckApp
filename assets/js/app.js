define(
  // deps:
  [
    'jquery'
  ],
  // définition du scope.
  function() {
    var initialize = function() {
      $('body').html("PLOP");
    };

    // on retourne ce qu'on veut utiliser dans d'autres modules.
    return {
      initialize: initialize,
    };
  }
);
