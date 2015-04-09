require.config({
  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    text: 'vendor/require/text',
    leaflet: 'vendor/leaflet/leaflet-src',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone',
    },
    'underscore': {
      exports: '_',
    },
  },
  urlArgs: "bust=" + (new Date()).getTime(),
});

require(
  [
    'app'
  ],
  function(App) {
    App.initialize();
  }
);
