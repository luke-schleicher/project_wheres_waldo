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

  return {
    createTag: createTag,
  };

}());
