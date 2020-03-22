require 'rails_helper'

RSpec.describe Organization, type: :model do
  describe 'validations' do
    let(:organization) { build(:organization) }

    it 'must have a name' do
      expect(organization).to be_valid
      organization.name = nil
      expect(organization).to_not be_valid
    end

    it 'must have an address' do
      expect(organization).to be_valid
      organization.address = nil
      expect(organization).to_not be_valid
    end

    it 'must have a city' do
      expect(organization).to be_valid
      organization.city = nil
      expect(organization).to_not be_valid
    end

    it 'must have a postcode' do
      expect(organization).to be_valid
      organization.postcode = nil
      expect(organization).to_not be_valid
    end

    it 'must have a country' do
      expect(organization).to be_valid
      organization.country = nil
      expect(organization).to_not be_valid
    end

    it 'must have a valid organization type' do
      expect(organization).to be_valid
      expect { organization.organization_type = 'invalid' }.to raise_error(ArgumentError)
    end
  end
end
