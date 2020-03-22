require 'rails_helper'

RSpec.describe ApiController, type: :controller do

  let(:contact) { create(:contact) }
  before do
    sign_in_contact contact
  end

  describe '#get_current_contact' do
    it 'works' do
      get :get_current_contact
      expect(response).to be_ok
    end
  end
end
