class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :fact_id
      t.text :comment
      t.integer :score
      t.string :ancestry
      
      t.timestamps
    end
  end
end
