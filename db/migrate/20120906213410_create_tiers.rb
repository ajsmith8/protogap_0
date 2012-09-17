class CreateTiers < ActiveRecord::Migration
  def change
    create_table :tiers do |t|
      t.integer :level
      t.integer :xp_to_lvl
      
      t.timestamps
    end
  end
end
