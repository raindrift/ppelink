require 'rails_helper'

RSpec.describe RegistrationsController, type: :controller do
  describe 'hospitals' do
    it 'successfully creates an organization and contact and then texts for confirmation' do
      expect(SecureRandom).to receive(:hex).and_return('12345678')

      post :create, params: {
        contact: {
          name: 'Nathanael Burt',
          phone: '9499100948',
          email: 'nathanael.burt@gmail.com'
        },
        organization: {
          name: 'Nathanael Burt',
          address1: '49 Ludlow St',
          address2: 'Apt 10B',
          city: 'New York',
          state: 'NY',
          postcode: '10002',
          country: 'United States',
          organizationType: 'hospital'
        }
      }

      expect(response.status).to eq(200)

      organization = Organization.last

      expected = {
        organization: organization,
        contact: organization.contacts.first
      }.to_json

      expect(response.body).to eq(expected)
    end
  end
end
