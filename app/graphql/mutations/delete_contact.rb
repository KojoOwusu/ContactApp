module Mutations
  class DeleteContact < BaseMutation
    
    field :contacts, [Types::ContactType], null: false
    field :errors, [String], null: false

    argument :id, ID, required: true

    def resolve(id:)
      begin
          contact = Contact.find(id)
          phonenum = Phonenumber.find_by(id: contact.id)
          email = Email.find_by(id: contact.id)
          contact.destroy

      rescue ActiveRecord::RecordNotFound
          puts "could not find record of id: #{id}"
      rescue ActiveRecord::RecordNotDestroyed
          puts "could not delete record of id: #{id}"
      end  
      
      {
        contacts:Contact.all,
        errors:[]
      }
    end
  end
end
