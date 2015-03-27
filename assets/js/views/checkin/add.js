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
      el: '#popover',
      template: _.template(checkinAddTemplate),
      render: function(options) {
        var self = this;
        self.$el.html(self.template());
      },
      events: {
        "submit #add_checkin": "addCheckin",
      },
      
      addCheckin: function(evt) {
        evt.preventDefault();
        
        var serializeArray = $(evt.currentTarget).serializeArray();
        var checkin = new CheckInModel();
        
        $.each(serializeArray, function(index, o){
          checkin.set(o.name, o.value);
        });
        
        checkin.save(null, {
          success: function(model, response, options){
            $('#popover').toggle().html('');
          },
        });
        
        return false;
      }
      
    });
    return CheckInAddView;
  }
);
