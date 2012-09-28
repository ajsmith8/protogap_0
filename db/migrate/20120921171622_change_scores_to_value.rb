class ChangeScoresToValue < ActiveRecord::Migration
  def up
    rename_column :scores, :score, :value
  end

  def down
  end
end
