module ControllerExampleGroup

  extend ActiveSupport::Concern

  RSpec.configure do |config|
    config.include self, :type => :controller
  end

  # def sign_in user
  #   controller.session[:user_id] = user.id
  # end

  def sign_in_contact contact
    controller.session[:contact_id] = contact.id
  end

  def sign_out!
    controller.sign_out!
  end

  def current_user
    controller.current_user
  end
end
