class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :provider
      t.string :uid
      t.string :token
      
      t.integer :level, default: 1
      t.integer :xp, default: 0
      t.integer :votes, default: 0
      
      t.boolean :is_temp_user, default: true
      t.boolean :is_admin
      
      t.timestamps
    end
  end
end
