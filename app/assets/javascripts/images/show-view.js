
var IMG = IMG || {};

IMG.view = (function($){

  var $image;
  var $container;
  var $characterSelect;
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
    _renderTag(tag);
    _appendSelect(tag);
  };

  var _renderTag = function(tag) {
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

  var getCharacterName = function(e) {
    var $target = $(e.target);
    console.log($target);
  };

  var getTagID = function(e) {

  };

  var _appendSelect = function(tag) {
    var $tagBox = $(".img-tag#" + tag.id).parent();
    $tagBox.append($characterSelect);
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
    $characterSelect.on("change", callbacks.persistTag);
  };

  var _getDomElements = function() {
    $container = $('.main-img-container');
    $image = $(".main-img");
    $characterSelect = $("#character-select");
  };

  return {
    init: init,
    getPercentileMouseCoords: getPercentileMouseCoords,
    renderTagWithSelect: renderTagWithSelect,
    removeTag: removeTag,
    getCharacterName: getCharacterName,
    getTagID: getTagID,
  };

}($));
