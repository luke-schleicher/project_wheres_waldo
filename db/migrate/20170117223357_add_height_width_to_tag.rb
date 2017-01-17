
class AddHeightWidthToTag < ActiveRecord::Migration[5.0]

  def up
    add_column :tags, :height, :integer
    add_column :tags, :width, :integer
  end

  def down
    remove_column :tags, :height, :integer
    remove_column :tags, :width, :integer
  end

end
