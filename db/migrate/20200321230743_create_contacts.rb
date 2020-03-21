class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :title
      t.string :phone
      t.string :email
      t.string :phone_confirmation_code
      t.string :email_confirmation_code
      t.boolean :phone_confirmed, null: false, default: false
      t.boolean :email_confirmed, null: false, default: false

      t.timestamps null: false
    end

    add_index :contacts, [:phone]
    add_index :contacts, [:email]

    create_table :organizations_contacts do |t|
      t.integer :organization_id, null: false
      t.integer :contact_id, null: false
    end

    add_index :organizations_contacts, [:contact_id, :organization_id]
    add_index :organizations_contacts, [:organization_id]
  end
end
