
var IMG = {};

IMG.model = (function(){

  return {};

}());

IMG.view = (function($){

  var $image;

  var init = function(){
    $image = $(".main-img");
  };

  return {
    init: init
  };

}($));

IMG.controller = (function(model, view){

  var init = function(){
    view.init();
  };

  return {
    init: init
  };

}(IMG.model, IMG.view));

$(document).ready(function(){
  if ($("body").data("controller-action") === "images-show"){
    // TODO
  }
});
