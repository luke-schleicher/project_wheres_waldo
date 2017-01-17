
var IMG = {};

IMG.model = (function(){

  var tags = [];

  var Tag = function Tag(coords) {
    this.percentileX = coords.x;
    this.percentileY = coords.y;
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

  var getPercentileMouseCoords = function(e) {
    var absoluteX = e.pageX;
    var absoluteY = e.pageY;
    return _calculatePercentileCoords(absoluteX, absoluteY);
  };

  var _calculatePercentileCoords = function(absoluteX, absoluteY){
    var offset = _imageOriginCoords();
    var percentileX = (absoluteX - offset.x) / _getImageWidth();
    var percentileY = (absoluteY - offset.y) / _getImageHeight();
    return {
      x: percentileX,
      y: percentileY,
    };
  };

  var _imageOriginCoords = function(){
    var offset = $image.offset();
    return {
      x: offset.left,
      y: offset.top,
    };
  };

  var _getImageWidth = function(){
    return $image.width();
  };

  var _getImageHeight = function(){
    return $image.height();
  };

  var _initImageListener = function() {
    $image = $(".main-img");
    $image.on("click", callbacks.createTag);
  };

  return {
    init: init,
    getPercentileMouseCoords: getPercentileMouseCoords
  };

}($));

IMG.controller = (function(model, view){

  var createTag = function(e) {
    var coords = view.getPercentileMouseCoords(e);
    model.createTag(coords);
  };

  var callbacks = {
    createTag: createTag
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
