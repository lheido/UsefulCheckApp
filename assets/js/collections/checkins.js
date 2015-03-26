define(
  // deps:
  [
    'underscore',
    'backbone',
  ],
  // définition du scope.
  function(_, Backbone, CheckInModel) {

    var CheckInCollection = Backbone.Collection.extend({
      url: "/checkin",
    });

    return CheckInCollection;
  }
);
