require 'rails_helper'

RSpec.describe Contact, type: :model do
  describe '.generate_for' do
    let(:contact) { create(:contact, email_confirmed: false, phone_confirmed: false) }
    let!(:organization) { create(:organization, active: false, contacts: [contact]) }

    describe '#confirm_email' do
      it 'confirms the email and makes the org active' do
        contact.confirm_email!
        organization.reload
        expect(organization.active).to be_truthy
      end
    end

    describe '#confirm_phone' do
      it 'confirms the phone and makes the org active' do
        contact.confirm_phone!
        organization.reload
        expect(organization.active).to be_truthy
      end
    end

  end
end
