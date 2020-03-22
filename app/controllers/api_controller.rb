class ApiController < ApplicationController
  before_action :authorize_contact, except: [:get_current_user]

  rescue_from Exception, :with => :render_error

  def get_current_contact
    render json: {
      currentContact: 'foo'
    }
  end



  private

  def render_error(error)
    logger.error error.message
    logger.error error.backtrace.join("\n")
    render json: {error: error.message}, status: 500
  end
end
