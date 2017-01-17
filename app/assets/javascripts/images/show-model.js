
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
    if (_activeTag.name === "") {
      return _activeTag;
    }
  };

  var destroyUnnamedTag = function(tag){
    delete tags[tag.id];
  };

  var taggingInProgress = function() {
    if (_activeTag) {
      return _activeTag.name === '';
    }
    return false;
  };

  var persistTag = function(name, tagId) {
    var tag = _getTagById(tagId);
    tag.name = name;
    //$.ajax({
      //url: ,
      //method: "POST",
      //data: tag,
      //dataType: "json"
    //});
  };

  var _getTagById = function(id){
    return tags[id];
  };

  return {
    createTag: createTag,
    unnamedTag: unnamedTag,
    destroyUnnamedTag: destroyUnnamedTag,
    taggingInProgress: taggingInProgress,
    persistTag: persistTag,
    tags: tags
  };

}());
