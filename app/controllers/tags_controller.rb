
class TagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)

puts @tag

  end

  private

  def tag_params
    params.require(:tag).permit(:name,
                                :percentile_x,
                                :percentile_y)
  end

end
