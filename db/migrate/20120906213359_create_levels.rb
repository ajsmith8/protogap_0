class CreateLevels < ActiveRecord::Migration
  def change
    create_table :levels do |t|
      t.integer :level
      t.integer :xp_to_lvl
      t.string :image

      t.timestamps
    end
  end
end
