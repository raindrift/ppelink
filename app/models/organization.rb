class Organization < ApplicationRecord
  has_and_belongs_to_many :contacts

  enum organization_type: {hospital: 0, donor: 1}

  validates :name, :address, :city, :postcode, :country, presence: true

  def as_json(options = nil)
    {
      id: id,
      name: name,
      address: address,
      address2: address2,
      city: city,
      state: state,
      postcode: postcode,
      country: country,
      organizationType: organization_type
    }
  end
end
