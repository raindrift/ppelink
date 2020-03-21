class Organization < ApplicationRecord
  has_and_belongs_to_many :contacts

  enum organization_type: [ :hospital, :donor ]
end
