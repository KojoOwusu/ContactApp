module Types
    module Input
        class PhoneNumberInput < Types::BaseInputObject
                argument :phonenumber, String, required: true
                argument :purpose, String, required: true
        end
    end
end

