
var IMG = IMG || {};

IMG.controller = (function(model, view){

  var createTag = function(e) {
    if (model.taggingInProgress()) {
      clearUnnamedTag();
    }
    var coords = view.getPercentileMouseCoords(e);
    var tag = model.createTag(coords);
    view.renderTagWithSelect(tag);
  };

  var clearUnnamedTag = function() {
    var unnamedTag = model.unnamedTag();
    model.destroyUnnamedTag(unnamedTag);
    view.removeTag(unnamedTag);
  };

  var persistTag = function(e) {
    var name = view.getCharacterName(e);
    var tagId = view.getTagId(e);
    model.persistTag(name, tagId);
  };

  var callbacks = {
    createTag: createTag,
    persistTag: persistTag,
  };

  var init = function(){
    view.init(callbacks);
  };

  return {
    init: init
  };

}(IMG.model, IMG.view));
