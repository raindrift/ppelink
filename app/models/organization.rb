class Organization < ApplicationRecord
  has_and_belongs_to_many :contacts

  enum organization_type: {hospital: 0, donor: 1}

  validates :name, :address, :city, :postcode, :country, presence: true
end
