define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'collections/checkins',
    'text!./../../../templates/checkin/list.html'
  ],
  // définition du scope.
  function($, _, Backbone, CheckInCollection, checkinListTemplate) {
    var CheckInListView = Backbone.View.extend({
      el: '#checkinlist',
      template: _.template(checkinListTemplate),
      render: function() {
        var self = this;
        var checkInCollection = new CheckInCollection();
        checkInCollection.fetch({
          success: function(checkins) {
            self.$el.html(self.template({
              'checkInList': checkins.models
            }));
          }
        });
      }
      
    });
    
    return CheckInListView;
  }
);
