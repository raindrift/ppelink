class Contact < ApplicationRecord
  has_and_belongs_to_many :organizations

end
