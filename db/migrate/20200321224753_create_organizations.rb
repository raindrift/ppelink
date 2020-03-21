class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string  :name, null: false
      t.integer :organization_type, null: false  #enum
      t.string  :address, null: false
      t.string  :address2, null: false
      t.string  :city, null: false
      t.string  :state
      t.string  :postcode, null: false
      t.string  :country, null: false, default: 'USA'
      t.string  :delivery_instructions
      t.float   :latitude
      t.float   :longitude

      t.timestamps null: false
    end

    add_index :organizations, [:organization_type]
    add_index :organizations, [:latitude, :longitude]
  end
end
