class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :fact_id
      t.integer :user_id
      t.boolean :is_quiz
      t.string :answer
      t.integer :xp
      
      t.timestamps
    end
  end
end
