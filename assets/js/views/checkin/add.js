define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'models/checkin',
    'text!./../../../templates/checkin/add.html'
  ],
  // définition du scope.
  function($, _, Backbone, CheckInModel, checkinAddTemplate) {
    var CheckInAddView = Backbone.View.extend({
      el: '#content',
      template: _.template(checkinAddTemplate),
      render: function(options) {
        var self = this;
        /*var checkInModel = new CheckInModel({id: options.id});
        checkInModel.fetch({
          success: function(checkin) {
            self.$el.html(self.template({
              'checkin': checkin
            }));
          }
        });*/
        self.$el.html(self.template());
      }
    });
    return CheckInAddView;
  }
);
