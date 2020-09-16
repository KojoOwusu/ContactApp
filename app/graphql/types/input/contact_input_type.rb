#creating structure of new contact input for mutation 
module Input
    class ContactInputType < Types::BaseInputObject
        argument :firstname, String, required: true
        argument :lastname, String, required: true
        argument :phonenumbers, [Types::PhoneNumberType], required: true, 
        argument :emails, [Types::EmailType], required: true
        argument :twitterusername, String, required: false    
    end 
end