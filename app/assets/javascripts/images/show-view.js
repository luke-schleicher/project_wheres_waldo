var IMG = IMG || {};

IMG.view = (function($){

  var $image;
  var $container;
  var callbacks;

  var init = function(callbax){
    callbacks = callbax;
    _getDomElements();
    _registerListeners();
  };

  var getPercentileMouseCoords = function(e) {
    var absoluteX = e.pageX;
    var absoluteY = e.pageY;
    return _calculatePercentileCoords(absoluteX, absoluteY);
  };

  var renderTags = function(tags){
    //TODO
  };

  var renderTagWithSelect = function(tag){
    renderTag(tag);
    //TODO
  };

  var renderTag = function(tag) {
    var relativeCoords = _calculateRelativeCoords(tag);
    var $tagBox = $("<div>")
      .addClass("img-tag-container")
      .css({
        "top": relativeCoords.y,
        "left": relativeCoords.x,
      });
    var $tag = $("<div>")
      .addClass("img-tag")
      .attr("id", tag.id)
      .css({
        "width": tag.width + "px",
        "height": tag.height + "px"
      });
    $tagBox.append($tag);
    $container.append($tagBox);
  };

  var removeTag = function(tag) {
    var $tag = $(".img-tag#" + tag.id);
    $tag.parent().remove();
  };

  var _calculateRelativeCoords = function(tag) {
    var x = tag.percentileX * _getImageWidth() - (tag.width / 4);
    var y = tag.percentileY * _getImageHeight();
    return {
      x: x,
      y: y,
    }
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

  var _registerListeners = function() {
    $image.on("click", callbacks.createTag);
  };

  var _getDomElements = function() {
    $container = $('.main-img-container');
    $image = $(".main-img");
  };

  return {
    init: init,
    getPercentileMouseCoords: getPercentileMouseCoords,
    renderTag: renderTag,
    removeTag: removeTag,
  };

}($));
