module ApiControllerHelpers

  private

  # simple serializers for models
  def contact_as_json(contact)
    {
      :id => contact.id,
      :name => contact.name,
    }
  end

end
