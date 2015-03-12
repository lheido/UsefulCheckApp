require.config({
  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone',
    },
    'underscore': {
      exports: '_',
    }
  },
});

require(
  [
    'app'
  ],
  function(App) {
    App.initialize();
  }
);
