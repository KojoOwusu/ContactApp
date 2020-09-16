class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :twitterusername
      t.timestamps
    end

    create_table :phonenumbers do |t|
      t.belongs_to :contact
      t.string :phonenumber, null: false
      t.string :purpose
      t.timestamps
    end

    create_table :emails do |t|
      t.belongs_to :contact
      t.string :email
      t.string :purpose 
      t.timestamps
    end
  end
end
