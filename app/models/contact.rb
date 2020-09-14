class Contact < ApplicationRecord
    validates :firstname, presence: true
    validates :lastname, presence:true
    has_many :phonenumbers, dependent: :destroy
    has_many :emails, dependent: :destroy
end

class Email < ApplicationRecord
    belongs_to :contact
end

class Phonenumber < ApplicationRecord
    belongs_to :contact
end
