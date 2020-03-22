class SessionsController < ApplicationController

  def create_by_sms
    number = Contact.normalize_number(params[:number])
    contact = Contact.where(number: number).first

    if contact
      contact.sms("To use PPElink, visit #{contact.auth_link('/app')}")
    else
      flash[:error] = "That number isn't registered for PPELink"
      redirect_to '/login'
    end
  end

  # we don't need this part until we have volunteers (users)
  # def create
  #   user = User.where(username: params[:username]).first
  #   # If the user exists AND the password entered is correct.
  #   if user && user.authenticate(params[:password])
  #     # Save the user id inside the browser cookie. This is how we keep the user
  #     # logged in when they navigate around our website.
  #     session[:user_id] = user.id
  #     redirect_to '/'
  #   else
  #   # If user's login doesn't work, send them back to the login form.
  #     redirect_to '/login'
  #   end
  # end

  def destroy
    sign_out!
    redirect_to '/login'
  end
end
