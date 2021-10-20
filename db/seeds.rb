puts('starts')
User.destroy_all

User1 = User.create( 
  username: 'AnnaW', 
  password: "1234", 
  first_name: "Anna", 
  age: "40", 
  city: "Austin", 
  state: "TX", 
  zip_code: "78729", 
  email: "ajoynaspam@gmail.com", 
  image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/66818765_10162192906105089_1396933560358666240_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=UaSuJi3858EAX_Fl2bM&_nc_ht=scontent-hou1-1.xx&oh=35c7ead458424f3ce0a4f0e1cc35be35&oe=619301E5",
  bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", 
  camp_type: "Primitive")
User2 = User.create( 
  username: 'JennaR', 
  password: "1234", 
  first_name: "Jenna", 
  age: "52", 
  city: "Leander", 
  state: "TX", 
  zip_code: "78726", 
  email: "jennaspam@gmail.com", 
  image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/18485404_2009037785982584_1729621200811099300_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=K2pjwLA_WAYAX8z0yNa&tn=Hhqm2KZ6RCWLZqHD&_nc_ht=scontent-hou1-1.xx&oh=25f5073275593736fcc76d8ec0d7694b&oe=61967EAD",
  bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", 
  camp_type: "Campground")

User3 = User.create( 
  username: 'EM', 
  password: "1234", 
  first_name: "Emily", 
  age: "46", 
  city: "Austin", 
  state: "TX", 
  zip_code: "78729", 
  email: "ajoynaspam@gmail.com", 
  image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t31.18172-8/12091445_10208271238925159_4165742369054501750_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=O9bU--J2fy4AX8HHntz&_nc_ht=scontent-hou1-1.xx&oh=efc816efe7d612c73a42478846a35141&oe=6194E1C8",
  bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", camp_type: "primitive")

User4 = User.create( 
    username: 'DeniseH', 
    password: "1234", 
    first_name: "Denise", 
    age: "46", 
    city: "Austin", 
    state: "TX", 
    zip_code: "78729", 
    email: "ajoynaspam@gmail.com", 
    image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/67294499_10219997295983383_5909045507967156224_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=GWmMNBGUM8oAX_0iBCw&_nc_oc=AQlXqd_1i5INFxBqLBep7uY8g-vOt9LUlYwstkSx0mspQSuIc8l3jn2UpIUUwQc6sho&_nc_ht=scontent-hou1-1.xx&oh=70aac25c949f8fbd8a0289c6274bae96&oe=61943515",
    bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", camp_type: "primitive")
  
User5 = User.create( 
      username: 'CrystalH', 
      password: "1234", 
      first_name: "Crystal", 
      age: "46", 
      city: "Austin", 
      state: "TX", 
      zip_code: "78729", 
      email: "ajoynaspam@gmail.com", 
      image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/246053063_10221028502729101_5769647254023165518_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OYPTA2FWSgwAX9Ge7AX&_nc_ht=scontent-hou1-1.xx&oh=72e6fd910ab554c9445f447389caef1f&oe=619447C1",
      bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", camp_type: "primitive")
User6 = User.create( 
        username: 'AshleyB', 
        password: "1234", 
        first_name: "Ashley", 
        age: "37", 
        city: "Austin", 
        state: "TX", 
        zip_code: "78750", 
        email: "ajoynaspam@gmail.com", 
        image_url: "https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/p206x206/120659656_10116304072440010_7623346809887267587_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Kk69IvcQuI4AX8CcDJO&_nc_ht=scontent-hou1-1.xx&oh=3d648d9c423b550497ef23d910c42383&oe=6194FC79",
        bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", camp_type: "primitive")

        # User7 = User.create( 
        #   username: 'MellisaD', 
        #   password: "1234", 
        #   first_name: "Mellisa", 
        #   age: "44", 
        #   city: "Cedar Park", 
        #   state: "TX", 
        #   zip_code: "78613", 
        #   email: "ajoynaspam@gmail.com", 
        #   image_url: "https://www.instagram.com/p/CSKvJRiplhxfselYDjpXXosQkzwyNW-_f0Ujas0/",
        #   bio: "I love hiking, camping and water! I am definitely a morning person but don't like to talk until I've had a cup of coffee.", camp_type: "primitive")
  


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
