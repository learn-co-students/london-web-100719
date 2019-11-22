class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :birth_year
  belongs_to :planet
end
