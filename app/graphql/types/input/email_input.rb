module Types
    module Input
        class EmailInput < Types::BaseInputObject
            argument :email, String, required: true
            argument :purpose, String, required: true
        end
    end
end 
