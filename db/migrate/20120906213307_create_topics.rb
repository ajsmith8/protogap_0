class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :title
      t.integer :score, default: 0
      t.boolean :is_approved
      
      t.timestamps
    end
  end
end
