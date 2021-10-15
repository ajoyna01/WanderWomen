class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, 
  :age, :city, :state, :zip_code, :email, :image_url, 
  :bio, :camp_type
end
