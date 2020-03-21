class AuthToken < ApplicationRecord
  belongs_to :contact

  def self.generate_for contact
    existing_token = AuthToken.where(contact: contact).first
    if existing_token
      return existing_token
    end

    begin
      token = SecureRandom.hex(8)
      AuthToken.create(contact: contact, token: token)
    rescue ActiveRecord::RecordNotUnique
      retry
    end
  end
end
