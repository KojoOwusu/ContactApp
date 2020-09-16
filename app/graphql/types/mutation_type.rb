module Types
  class MutationType < Types::BaseObject
    field :createContact, mutation: Mutations::CreateContact
    # TODO: remove me
  end
end
