# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
contact1 = Contact.create({firstname: 'Mark', lastname: 'Henry',twitterusername:'Mkbig123' })
          Email.create([{contact_id: contact1.id, email:'markh@aomail.com',purpose:'work'}])
          Phonenumber.create([{contact_id: contact1.id, phonenumber:'+233268075424', purpose:'personal'},{contact_id:contact1.id,phonenumber: '+2333686873',purpose:'work'}])


          
