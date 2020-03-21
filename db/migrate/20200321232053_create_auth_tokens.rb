class CreateAuthTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :auth_tokens do |t|
      t.integer :contact_id, null: false
      t.string :token, null: false
      t.integer :use_count, default: 0, null: false

      t.timestamps null: false
    end

    add_index :auth_tokens, [ :token ], unique: true
  end
end
