module Mutations
  class CreateContact < BaseMutation
    # TODO: define return fields
    field :contact, Types::ContactType, null: false
    
    #define arguments for mutation
    #argument :params, Types::Input::ContactInputType, required: true
    argument :firstname, String, required: true
    argument :lastname, String, required: true
    argument :phonenumbers, [Types::Input::PhoneNumberInput], required: true
    argument :emails, [Types::Input::EmailInput], required: true
    argument :twitterusername, String, required: false  

    # TODO: define resolve method passing in contact parameters (firstname, lastname, phonenumbers, emails, twitterusername)
    def resolve(firstname:,lastname:,phonenumbers:,emails:,twitterusername:)
      begin
        contact = Contact.create({firstname: firstname, lastname:lastname,twitterusername:twitterusername })
        phonenumbers.each do |item| 
          phoneNum = {contact_id:contact.id}
          hashItem = Hash item
          Phonenumber.create(phoneNum.merge(hashItem))
        end
        emails.each do |item|
          email = {contact_id:contact.id}
          hashItem = Hash item
          Email.create(email.merge(hashItem))
        end
      rescue ActiveRecord::RecordInvalid => e
        puts "error adding contact record"
        {
          contact: nil,
          errorMessage: 'failed to create contact'
        }
      end
      # fetch particular contact you just created and output that
      {contact:Contact.find(contact.id)}
    end
  end
end
