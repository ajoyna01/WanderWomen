class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    has_many :followers, foreign_key: :followers_id, class_name: "Connections"
    # has_many :followers, foreign_key: :follower_id, class_name: "Connections"
    has_many :followed_users, through: :followers
    has_many :followed_users, foreign_key: :followed_by_id, class_name: "Connections"
    # has_many :followed_users, foreign_key: :followed_user_id, class_name: "Connections"
    has_many :followers, through: :followed_users
end
