class AddActiveToOrganizations < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :active, :boolean, default: false, null: false
    add_index :organizations, [:active]
  end

end
