class CreateUserTiers < ActiveRecord::Migration
  def change
    create_table :user_tiers do |t|
      t.integer :user_id
      t.integer :topic_id
      t.integer :level
      t.integer :xp
      
      t.timestamps
    end
  end
end
