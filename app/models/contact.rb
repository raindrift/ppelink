class Contact < ApplicationRecord
  has_and_belongs_to_many :organizations

  def confirm_email!
    self.update(email_confirmed: true)

    organizations.all.each do |org|
      org.update(active: true)
    end
  end

  def confirm_phone!
    self.update(phone_confirmed: true)

    organizations.all.each do |org|
      org.update(active: true)
    end
  end

  def confirmed?
    phone_confirmed || email_confirmed
  end

  def as_json(options = nil)
    {
      id: id,
      name: name
    }
  end

end
