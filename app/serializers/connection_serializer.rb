class ConnectionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :followers
  has_one :followed_by
end
