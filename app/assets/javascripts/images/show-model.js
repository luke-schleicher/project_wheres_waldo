
var IMG = IMG || {};

IMG.model = (function(){

  var tags = [];
  var id = 1;

  var Tag = function Tag(coords) {
    this.percentileX = coords.x;
    this.percentileY = coords.y;
    this.id = id;
    this.name = "";
    id++;
  };
  Tag.prototype.height = 100;
  Tag.prototype.width = 50;

  var createTag = function(coords) {
    var tag = new Tag(coords);
    tags.push(tag);
    return tag;
  };

  var unnamedTag = function(){
    return tags[(tags.length - 1)];
  };

  var destroyUnnamedTag = function(tag){
    var index = tags.indexOf(tag);
    tags.splice(index, 1);
  };

  var taggingInProgress = function() {
    var lastTag = tags[(tags.length - 1)];
    if (lastTag) {
      return lastTag.name === '';
    }
    return false;
  };

  var persistTag = function(name, tagId) {
    console.log(name, tagId);
  };

  return {
    createTag: createTag,
    unnamedTag: unnamedTag,
    destroyUnnamedTag: destroyUnnamedTag,
    taggingInProgress: taggingInProgress,
    persistTag: persistTag,
  };

}());
