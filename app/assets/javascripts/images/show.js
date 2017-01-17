
var IMG = {};



IMG.model = (function(){

  var tags = [];

  var Tag = function Tag(coords) {
    this.x = coords.x;
    this.y = coords.y;
    this.name = "";
  };

  var createTag = function(coords) {
    var tag = new Tag(coords);
    tags.push(tag);
  };

  return {
    createTag: createTag,
  };

}());



IMG.view = (function($){

  var $image;
  var callbacks;

  var init = function(callbax){
    callbacks = callbax;
    _initImageListener();
  };

  var getMouseCoords = function(e) {
    return {
      x: e.pageX,
      y: e.pageY,
    };
  };

  var _initImageListener = function() {
    $image = $(".main-img");
    $image.on("click", callbacks.createTag);
  };

  return {
    init: init,
    getMouseCoords: getMouseCoords,
  };

}($));



IMG.controller = (function(model, view){

  var callbacks = {
    createTag: createTag;
  };

  var createTag = function(e) {
    var coords = view.getMouseCoords(e);
    model.createTag(coords);
  };

  var init = function(){
    view.init(callbacks);
  };

  return {
    init: init
  };

}(IMG.model, IMG.view));



$(document).ready(function(){
  if ($("body").data("controller-action") === "images-show"){
    IMG.controller.init();
  }
});
