module Types
  class PhoneNumberType < Types::BaseObject
    field :phonenumber, String, null: false
    field :purpose, String, null: false
  end
end
