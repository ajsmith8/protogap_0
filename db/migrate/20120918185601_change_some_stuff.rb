class ChangeSomeStuff < ActiveRecord::Migration
  def up
    rename_column :edits, :type, :category
    remove_column :users, :email
  end

  def down
  end
end
