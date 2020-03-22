FactoryBot.define do
  factory :organization do
    contacts {[FactoryBot.create(:contact)]}
    name     { FFaker::Company.name }
    organization_type { :hospital }
    address { FFaker::Address.street_address}
    city { FFaker::AddressUS.city}
    state { FFaker::AddressUS.state_abbr}
    postcode { FFaker::AddressUS.zip_code}
    country { 'USA' }
  end


end
