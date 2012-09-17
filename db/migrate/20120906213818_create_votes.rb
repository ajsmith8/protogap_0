class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :topic_id
      t.integer :fact_id
      t.integer :score
      t.integer :votes
      
      t.timestamps
    end
  end
end
