define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'models/checkin',
    'text!./../../../templates/checkin/details.html'
  ],
  // définition du scope.
  function($, _, Backbone, CheckInModel, checkinDetailsTemplate) {
    var CheckInDetailsView = Backbone.View.extend({
      el: '#content',
      template: _.template(checkinDetailsTemplate),
      render: function(options) {
        var self = this;
        var checkInModel = new CheckInModel({id: options.id});
        checkInModel.fetch({
          success: function(checkin) {
            self.$el.html(self.template({
              'checkin': checkin
            }));
          }
        });
      }
    });
    return CheckInDetailsView;
  }
);
