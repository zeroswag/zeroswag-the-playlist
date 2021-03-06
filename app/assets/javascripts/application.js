// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var pageLoadScripts = function() {
  $('.flash').addClass('show');
  setTimeout(function(){ $('.flash').removeClass('show') }, 5000);

  $('.mixtape-form').on('focus', function() {
    $(this).select();
  })

}

$(document).on('page:load', pageLoadScripts);
$(document).on('ready', pageLoadScripts);