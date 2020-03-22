class ChangeOrganizationsContactsToContactsOrganizations < ActiveRecord::Migration[6.0]
  def change
    rename_table :organizations_contacts, :contacts_organizations
  end
end
