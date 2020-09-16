module Types
  class ContactType < Types::BaseObject
    field :id, ID, null: false
    field :firstname, String, null: false
    field :lastname, String, null: false
    field :phonenumbers, [Types::PhoneNumberType], null: false
    field :emails, [Types::EmailType], null: true
    field :twitterusername, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
