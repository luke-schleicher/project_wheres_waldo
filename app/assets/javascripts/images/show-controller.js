var IMG = IMG || {};


IMG.controller = (function(model, view){

  var createTag = function(e) {
    var coords = view.getPercentileMouseCoords(e);
    var tag = model.createTag(coords);
    view.renderTag(tag);
  };

  var clearUnnamedTag = function(e) {
    console.log(model.taggingInProgress());
    if (model.taggingInProgress()) {

      var unnamedTag = model.unnamedTag();
      model.destroyUnnamedTag(unnamedTag);
      view.removeTag(unnamedTag);
    }
  };

  var callbacks = {
    createTag: createTag,
    clearUnnamedTag: clearUnnamedTag,
  };

  var init = function(){
    view.init(callbacks);
  };

  return {
    init: init
  };

}(IMG.model, IMG.view));
