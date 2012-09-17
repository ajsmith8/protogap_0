class RenameFactType < ActiveRecord::Migration
  def up
    rename_column :facts, :type, :category
  end

  def down
  end
end
