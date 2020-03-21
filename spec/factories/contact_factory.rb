FactoryBot.define do
  factory :contact do
    name     { FFaker::Name.name }
    title    { FFaker::Job.title }
    phone    { "+1#{FFaker::PhoneNumber.short_phone_number.gsub(/\-/, '')}" }
    email { FFaker::Internet.email }
    phone_confirmed { true }
    email_confirmed { true }
  end
end
