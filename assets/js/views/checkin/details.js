define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'leaflet',
    'models/checkin',
    'text!./../../../templates/checkin/details.html'
  ],
  // définition du scope.
  function($, _, Backbone, L, CheckInModel, checkinDetailsTemplate) {
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
            var $user = $(".user").detach();
            console.log($user);
            var map = L.map('map-canvas').setView(
              [checkin.attributes.lat, checkin.attributes.lng], 14);
            var popup = L.popup(
              {
                closeOnClick: false,
                closeButton: false,
                className: 'user'
              }
            );
            popup.setLatLng([checkin.attributes.lat, checkin.attributes.lng]);
            popup.setContent($user.html());
            popup.openOn(map);
            L.tileLayer(
              'http://{s}.tile.osm.org/{z}/{x}/{y}.png', 
              {
                maxZoom: 22
              }
            ).addTo(map);
            
          }
        });
      }
    });
    return CheckInDetailsView;
  }
);
