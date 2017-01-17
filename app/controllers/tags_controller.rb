
class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.save ? successful_create : failed_create
    puts @tag
    puts params
  end

  private

  def tag_params
    params.require(:tag).permit(:name,
                                :percentileX,
                                :percentileY,
                                :height,
                                :width)
  end

  def successful_create
  end

  def failed_create
  end

end
