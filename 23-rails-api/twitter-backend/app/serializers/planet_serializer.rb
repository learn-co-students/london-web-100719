class PlanetSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :people

  def self.all
    Planet.all.map{|p| PlanetSerializer.new(p)}
  end
end
