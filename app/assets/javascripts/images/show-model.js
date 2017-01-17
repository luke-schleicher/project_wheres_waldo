var IMG = IMG || {};

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
    return tag;
  };

  return {
    createTag: createTag,
  };

}());