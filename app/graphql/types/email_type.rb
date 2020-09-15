module Types
  class EmailType < Types::BaseObject
    field :email, String, null: true
    field :purpose, String, null: true
  end
end
