class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  belongs_to :user
end
