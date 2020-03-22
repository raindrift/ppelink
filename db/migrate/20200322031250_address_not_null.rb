class AddressNotNull < ActiveRecord::Migration[6.0]
  def up
    change_column :organizations, :address2, :string, null: true
  end

  def down
    change_column :organizations, :address2, :string, null: false
  end
end
