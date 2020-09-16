module Types
  class MutationType < Types::BaseObject
    field :editContact, mutation: Mutations::EditContact
    field :deleteContact, mutation: Mutations::DeleteContact
    field :createContact, mutation: Mutations::CreateContact
  end
end
