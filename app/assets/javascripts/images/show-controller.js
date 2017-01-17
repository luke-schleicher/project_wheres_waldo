var IMG = IMG || {};


IMG.controller = (function(model, view){

  var createTag = function(e) {
    var coords = view.getPercentileMouseCoords(e);
    var tag = model.createTag(coords);
    view.renderTag(tag);
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