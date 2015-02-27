define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'collections/checkins'
  ],
  // définition du scope.
  function($, _, Backbone, CheckInCollection) {

    var CheckInListView = Backbone.View.extend({
      
      render: function() {
        console.log("CheckInView Render");
      }

    });

    return CheckInListView;
  }
);
