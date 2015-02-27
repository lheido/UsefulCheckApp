define(
  // deps:
  [
    'underscore',
    'backbone',
  ],
  // définition du scope.
  function(_, Backbone) {

    var CheckInCollection = Backbone.Collection.extend({
      url: "/checkin"
    });

    return CheckInCollection;
  }
);
