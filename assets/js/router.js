define(
  // deps:
  [
    'jquery',
    'underscore',
    'backbone',
    'views/checkin/list',
    'config'
  ],
  // définition du scope.
  function($, _, Backbone, CheckInListView, Config) {

    var Router = Backbone.Router.extend({

      routes: {
        "":                     "home",
        "hello":                "hello",
        "hello/:name":          "hello",
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

      Backbone.history.start();

    };

    return {
      initialize: initialize,
    };
  }
);
