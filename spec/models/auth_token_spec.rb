require 'rails_helper'

RSpec.describe AuthToken, type: :model do
  describe '.generate_for' do
    let(:contact) { create(:contact) }
    let(:contact2) { create(:contact) }

    it 'makes a token' do
      token = AuthToken.generate_for(contact)
      expect(token.contact).to eq contact
      expect(token.token).to be_truthy
    end

    it 'returns existing tokens' do
      token1 = AuthToken.generate_for(contact)
      token2 = AuthToken.generate_for(contact)
      expect(token1).to eq token2
    end

    it 'does not make duplicates' do
      allow(SecureRandom).to receive(:hex).once.and_return('foo')
      allow(SecureRandom).to receive(:hex).once.and_return('bar')
      AuthToken.create(contact: contact, token: 'foo')
      expect(AuthToken.generate_for(contact2).token).to eq 'bar'
    end
  end
end
