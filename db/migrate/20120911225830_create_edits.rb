class CreateEdits < ActiveRecord::Migration
  def change
    create_table :edits do |t|
      t.integer :user_id
      t.integer :fact_id
      t.integer :topic_id
      t.text :title
      t.text :description
      t.text :image
      t.string :type
      t.text :urls
      t.boolean :has_quiz
      t.text :question
      t.string :correct
      t.string :wrong1
      t.string :wrong2
      t.string :wrong3
      
      t.timestamps
    end
  end
end
