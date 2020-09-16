module Mutations
  class EditContact < BaseMutation
    # TODO: define return fields
    field :contact, Types::ContactType, null: false

    # TODO: define arguments
    argument :id, ID, required: true
    argument :firstname, String, required:false
    argument :lastname, String, required:false
    argument :phonenumbers, [Types::Input::PhoneNumberInput], required: false
    argument :emails, [Types::Input::EmailInput], required: false
    argument :twitterusername, String, required: false

    # TODO: define resolve method
    def resolve(id:,**attributes)
      contact=Contact.find(id)
      if attributes.key?(:phonenumbers)
        phonenumber = Phonenumber.find_by(contact_id:contact.id)
        attributes[:phonenumbers].each do |item|
          phonenumber.contact_id=contact.id
          phonenumber.phonenumber=item[:phonenumber]
          phonenumber.purpose = item[:purpose]
          phonenumber.save
        end
      elsif attributes.key?(:emails)
        email = Email.find_by(contact_id:contact.id)
        attributes[:emails].each do |item|
          email.contact_id=contact.id
          email.email=item[:email]
          email.purpose = item[:purpose]
          email.save
        end
      end
      contact.tap do |item|
        item.update!(attributes.slice(:firstname,:lastname,:twitterusername))
      end
      {contact:contact}
    end
  end
end
