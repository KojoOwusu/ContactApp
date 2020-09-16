module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    # /contacts
    field :contacts, [Types::ContactType],'root query which displays all contacts', null: false
     
    def contacts
      Contact.all.order(firstname: :asc)   #change sorting order by modifying order argument
    end

    #get single contact
    field :contact, Types::ContactType ,null: false do
      argument :id, ID, required: true
    end   
    def contact(id:)
      begin 
        Contact.find(id)
      rescue ActiveRecord::RecordNotFound => e
        GraphQL::ExecutionError.new('Note does not exist.')  
      end
    end
  end
end
