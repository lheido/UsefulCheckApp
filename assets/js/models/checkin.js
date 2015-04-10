define(
  // deps:
  [
    'underscore',
    'backbone',
    './user',
  ],
  // définition du scope.
  function(_, Backbone, UserModel) {

    var CheckInModel = Backbone.Model.extend({
      urlRoot: "/checkin",
      initialize: function(){
        this.set({'user': new UserModel(this.get('user'))})
      }
    });

    return CheckInModel;
  }
);
