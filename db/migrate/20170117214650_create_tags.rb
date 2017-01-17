class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.string :name
      t.float :percentile_x
      t.float :percentile_y

      t.timestamps
    end
  end
end
