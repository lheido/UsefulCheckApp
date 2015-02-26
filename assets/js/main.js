
require.config({
  paths: {
    jquery: 'vendor/jquery/jquery',
  }
});

require(['jquery'], function($){
  $('body').html("PLOP");
});
