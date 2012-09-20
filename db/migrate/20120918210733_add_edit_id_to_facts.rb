class AddEditIdToFacts < ActiveRecord::Migration
  def change
    add_column :facts, :edit_id, :integer
  end
end
