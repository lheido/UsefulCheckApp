require.config({
  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      export: 'Backbone',
    },
    'underscore': {
      export: '_',
    },
    'jquery': {
      export: '$',
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
