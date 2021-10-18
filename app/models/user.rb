class User < ApplicationRecord
    has_secure_password
    validates :first_name, presence: true
    validates :bio, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    
    has_many :followed_users, foreign_key: :follower_id,
    class_name: 'Connection'
    has_many :followees, through: :followed_users
    
    has_many :following_users, foreign_key: :followee_id, 
    class_name: 'Connection'
    has_many :followers, through: :following_users

    
    
end
