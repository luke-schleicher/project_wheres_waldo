var IMG = IMG || {};

IMG.model = (function(){

  var tags = [];

  var Tag = function Tag(coords) {
    this.percentileX = coords.x;
    this.percentileY = coords.y;
    this.name = "";
  };
  Tag.prototype.height = 100;
  Tag.prototype.width = 50;

  var createTag = function(coords) {
    var tag = new Tag(coords);
    tags.push(tag);
    return tag;
  };

  var unnamedTags = function(){
    return tags.filter(function(tag){
      return tag.name === "";
    });
  };

  var destroyUnnamedTags = function(){
    var unnamedTags = unnamedTags();
    destroyTags(unnamedTags);
  };

  var destroyTags = function(doomedTags){
    doomedTags.forEach(function(tag){
      index = tags.indexOf(tag);
      tags.splice(index, 1);
    });
  };

  return {
    createTag: createTag,
    unnamedTags: unnamedTags,
    destroyUnnamedTags: destroyUnnamedTags
  };

}());
