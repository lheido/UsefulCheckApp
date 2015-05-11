define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'leaflet',
    'models/checkin',
    'views/checkin/list',
    'text!./../../../templates/checkin/add.html'
  ],
  // définition du scope.
  function($, _, Backbone, L, CheckInModel, CheckInListView, checkinAddTemplate) {
    var CheckInAddView = Backbone.View.extend({
      el: '#popover',
      template: _.template(checkinAddTemplate),
      render: function(options) {
        
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.onGetCurrentPosition)
        } else {
          var $lat_input = $('input[name="lat"]');
          var $lng_input = $('input[name="lng"]');
        }
        
        this.$el.html(this.template());
        
        var $submit = $("#add_checkin_submit");
        
        $submit.attr('disabled', 'disabled');
        
        $submit.on('click', function(evt){
          $("#add_checkin_form").submit();
        });
      },
      
      onGetCurrentPosition: function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        var map = L.map('map-add-canvas').setView([lat, lng], 17);
        L.marker([lat, lng]).addTo(map);
        L.tileLayer(
          'http://{s}.tile.osm.org/{z}/{x}/{y}.png', 
          {
            maxZoom: 22
          }
        ).addTo(map);
        
        var $lat_input = $('input[name="lat"]');
        var $lng_input = $('input[name="lng"]');
        
        $lat_input.val(lat);
        $lng_input.val(lng);
        
        $("#add_checkin_submit").removeAttr('disabled');
      },
      
      events: {
        "submit #add_checkin_form": "addCheckin",
      },
      
      addCheckin: function(evt) {
        evt.preventDefault();
        var self = this;
        var serializeArray = $(evt.currentTarget).serializeArray();
        var checkin = new CheckInModel();
        $.each(serializeArray, function(index, o){
          checkin.set(o.name, o.value);
        });
        
        checkin.save(null, {
          success: function(model, response, options){
            $('#popover-wrapper').css('display', 'none');
            if (Backbone.history.getFragment().indexOf('checkin/') == -1) {
              var listView = new CheckInListView();
              listView.render();
            }
          },
          error: function(model, response, options){
            console.log(response);
          }
        });
        
        return false;
      }
      
    });
    return CheckInAddView;
  }
);
