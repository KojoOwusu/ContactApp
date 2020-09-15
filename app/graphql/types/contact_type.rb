module Types
  class ContactType < Types::BaseObject
    description "A single contact entitiy"
    field :id, ID, null: false
    field :firstName, String, null: false
    field :lastName, String, null: false,
    field :phoneNumbers, [Types::PhoneNumberType], null: false
    field :emails, [Types::EmailType], null: false
    field :twitterUsername, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end


