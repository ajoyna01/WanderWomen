puts('starts')
# 

User1 = User.create( 
  username: 'AnnaW', 
  password: "456", 
  first_name: "Anna", 
  age: "40", 
  city: "Austin", 
  state: "TX", 
  zip_code: "78729", 
  email: "ajoynaspam@gmail.com", 
  image_url: "https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512",
  bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", 
  camp_type: "primitive")
User2 = User.create( 
  username: 'Jenna', 
  password: "555", 
  first_name: "Jenna", 
  age: "52", 
  city: "Leander", 
  state: "TX", 
  zip_code: "78726", 
  email: "ynaspam@gmail.com", 
  image_url: "https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512",
  bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", 
  camp_type: "primitive")
User3 = User.create( username: 'EM', password: "6456", first_name: "Emily", age: "40", city: "Austin", state: "TX", zip_code: "78729", email: "ajoynaspam@gmail.com", image_url: "https://ca.slack-edge.com/T02MD9XTF-U01HDB7FV4K-g4a57c08aae2-512",bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", camp_type: "primitive")


Conn1 = Connection.create( 
  follower_id: User1.id, 
  followee_id: User2.id,
  message: "Hi! Are you free November 5th for a trip to Enchanted Rock?")

Conn2 = Connection.create(
  follower_id: User2.id,
  followee_id: User3.id,
  message: "Hey! It looks like you're near me! Any trips coming up?"
)
Conn3 = Connection.create(
  follower_id: User3.id,
  followee_id: User1.id,
  message: "hi! what are you up to this weekend?"
)

# User.create(
# username: Faker::Internet.username,
# # password: Faker::Internet.password,
# email: Faker::Internet.email,
# first_name: Faker::Name.unique.female_first_name,
# # age: Faker::Number.within(range:18..70),
# city: Faker::Address.city,
# state: Faker::Address.state,
# zip_code: Faker::Address.zip_code,
# image_url: Faker::Avatar.image,
# # bio: Faker::Lorem.paragraph(sentence_count:2)
# )
puts('finish')
  # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
