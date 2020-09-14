class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :phonenumbers, array: true, default: []
      t.string :emails, array:true, default: []
      t.string :twitterusername
      
      t.timestamps
    end
  end
end
