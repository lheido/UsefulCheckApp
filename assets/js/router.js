define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'views/checkin/list',
    'views/checkin/details',
    'config'
  ],
  // définition du scope.
  function($, _, Backbone, CheckInListView, CheckInDetailsView, Config) {
    
    var Router = Backbone.Router.extend({
      routes: {
        "":                      "home",
        "hello":                 "hello",
        "hello/:name":           "hello",
        "checkin/:id_checkin":   "checkin"
        // "search/:query":        "search",
        // "search/:query/p:page": "search",
      }
    });
    
    var initialize = function() {
      var routeur = new Router();
      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        options.url = Config.apiServer + options.url;
        options.crossDomain = {
          crossDomain: true
        };
      });
      
      routeur.on('route:home', function(){
        var checkInListView = new CheckInListView();
        checkInListView.render();
      });
      
      routeur.on('route:hello', function(name){
        console.log('Hello '+name);
      });
      
      routeur.on('route:checkin', function(id_checkin){
        var checkInDetailsView = new CheckInDetailsView();
        checkInDetailsView.render({
          id: id_checkin
        });
      });
      
      Backbone.history.start();
    };
    
    return {
      initialize: initialize,
    };
  }
);
