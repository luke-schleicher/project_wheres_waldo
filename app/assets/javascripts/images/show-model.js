
var IMG = IMG || {};

IMG.model = (function(){

  var tags = {};
  var _activeTag;
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
    _activeTag = tag;
    tags[tag.id] = tag;
    return tag;
  };

  var unnamedTag = function(){
    return _activeTag;
  };

  var destroyUnnamedTag = function(tag){
    delete tags[tag.id];
  };

  var taggingInProgress = function() {
    if (_activeTag) {
      return _activeTag.name === "";
    }
    return false;
  };

  var persistTag = function(name, tagId) {
    var tag = _getTagById(tagId);
    tag.name = name;
    return $.ajax({
      url: "/tags",
      method: "POST",
      data: _railsifyTagData(tag),
      dataType: "json"
    }).then(_clearActiveTag);
  };

  var getTags = function() {
    return Object.values(tags);
  }

  var _getTagById = function(id){
    return tags[id];
  };

  var _railsifyTagData = function(tag){
    tag.percentile_x = tag.percentileX;
    tag.percentile_y = tag.percentileY;
    return { tag: tag };
  };

  var _clearActiveTag = function(){
    var lastActiveTag = _activeTag;
    _activeTag = null;
    return lastActiveTag;
  };

  return {
    createTag: createTag,
    unnamedTag: unnamedTag,
    destroyUnnamedTag: destroyUnnamedTag,
    taggingInProgress: taggingInProgress,
    persistTag: persistTag,
    getTags: getTags,
  };

}());
