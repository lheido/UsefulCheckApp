define(
  // deps:
  [
    'underscore',
    'backbone',
  ],
  // définition du scope.
  function(_, Backbone) {

    var CheckInModel = Backbone.Model.extend({
      urlRoot: "/checkin",
    });

    return CheckInModel;
  }
);
