class CreateFacts < ActiveRecord::Migration
  def change
    create_table :facts do |t|
      t.integer :topic_id
      t.text :title
      t.text :description
      t.text :image
      t.string :type
      t.boolean :has_quiz
      t.text :question
      t.string :correct
      t.string :wrong1
      t.string :wrong2
      t.string :wrong3
      t.integer :score, default: 0
      t.boolean :is_approved
      
      t.timestamps
    end
  end
end
