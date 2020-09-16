module Types
    module Input
        class PhoneNumberInput < Types::BaseInputObject
                argument :id, ID, required: false
                argument :phonenumber, String, required: true
                argument :purpose, String, required: true
        end
    end
end

