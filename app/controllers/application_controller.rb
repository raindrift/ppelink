class ApplicationController < ActionController::Base
  include ApiConventionsHelper

  def current_contact
    @current_contact ||= Contact.find(session[:contact_id]) if session[:contact_id]
  end
  helper_method :current_contact

  def authorize_contact
    if params[:t]
      token = AuthToken.where(token: params[:t]).first
      if token
        session[:contact_id] = token.contact.id
        @current_contact = token.contact  # no need to query again
        if token.use_count > 5
          token.destroy!
        else
          token.update_attributes(use_count: token.use_count + 1)
        end
      end
    end
    redirect_to '/login' unless current_contact
    return !!current_contact
  end

  def sign_out!
    session[:contact_id] = nil
  end
end
