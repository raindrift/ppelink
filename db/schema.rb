# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_22_031250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "auth_tokens", force: :cascade do |t|
    t.integer "contact_id", null: false
    t.string "token", null: false
    t.integer "use_count", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["token"], name: "index_auth_tokens_on_token", unique: true
  end

  create_table "contacts", force: :cascade do |t|
    t.string "name", null: false
    t.string "title"
    t.string "phone"
    t.string "email"
    t.string "phone_confirmation_code"
    t.string "email_confirmation_code"
    t.boolean "phone_confirmed", default: false, null: false
    t.boolean "email_confirmed", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_contacts_on_email"
    t.index ["phone"], name: "index_contacts_on_phone"
  end

  create_table "contacts_organizations", force: :cascade do |t|
    t.integer "organization_id", null: false
    t.integer "contact_id", null: false
    t.index ["contact_id", "organization_id"], name: "index_contacts_organizations_on_contact_id_and_organization_id"
    t.index ["organization_id"], name: "index_contacts_organizations_on_organization_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name", null: false
    t.integer "organization_type", null: false
    t.string "address", null: false
    t.string "address2"
    t.string "city", null: false
    t.string "state"
    t.string "postcode", null: false
    t.string "country", default: "USA", null: false
    t.string "delivery_instructions"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "active", default: false, null: false
    t.index ["active"], name: "index_organizations_on_active"
    t.index ["latitude", "longitude"], name: "index_organizations_on_latitude_and_longitude"
    t.index ["organization_type"], name: "index_organizations_on_organization_type"
  end

end
