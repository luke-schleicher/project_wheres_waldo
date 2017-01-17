var IMG = IMG || {};


IMG.controller = (function(model, view){

  var createTag = function(e) {
    var coords = view.getPercentileMouseCoords(e);
    var tag = model.createTag(coords);
    view.renderTag(tag);
  };

  var clearUnnamedTags = function(e) {
    var unnamedTags = model.unnamedTags();
    model.destroyUnnamedTags();
    view.clearAllTags();
    view.removeTags(unnamedTags);
  };

  var callbacks = {
    createTag: createTag,
    clearUnnamedTags: clearUnnamedTags
  };

  var init = function(){
    view.init(callbacks);
  };

  return {
    init: init
  };

}(IMG.model, IMG.view));
