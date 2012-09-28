class ChangeCommentName < ActiveRecord::Migration
  def up
    rename_column :comments, :comment, :content
  end

  def down
  end
end
