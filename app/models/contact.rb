class Contact < ApplicationRecord
    validates :firstname, presence: true
    validates :lastname, presence:true
    has_many :phonenumbers, dependent: :destroy
    has_many :emails, dependent: :destroy
end

