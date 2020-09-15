module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    # TODO: remove me
    field :contacts, [Types::ContactType],'root query which displays all contacts', null: false
     
    def contacts
      Contact.all
    end
  end
end
