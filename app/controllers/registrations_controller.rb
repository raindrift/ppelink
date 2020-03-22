class RegistrationsController < ApplicationController
  def create
    organization = Organization.create!(
      name: organization_params[:name],
      address: organization_params[:address1],
      address2: organization_params[:address2],
      city: organization_params[:city],
      state: organization_params[:state],
      postcode: organization_params[:postcode],
      country: organization_params[:country],
      organization_type: organization_params[:organization_type]
    )

    contact = organization.contacts.create!(
      name: contact_params[:name],
      phone: contact_params[:phone],
      email: contact_params[:email]
    )

    render status: 200, json: {
      organization: organization,
      contact: contact
    }
  end

  private def contact_params
    api_params[:contact]
  end

  private def organization_params
    api_params[:organization]
  end
end
