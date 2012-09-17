class SetScoreDefault < ActiveRecord::Migration
  def up
    change_column :comments, :score, :integer, default: 0
    change_column :user_tiers, :level, :integer, default: 1
    change_column :user_tiers, :xp, :integer, default: 0
  end

  def down
  end
end
