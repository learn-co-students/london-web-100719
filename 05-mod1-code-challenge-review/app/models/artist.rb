class Artist

  attr_reader :name, :years_experience
  @@all = []

  def initialize(name, years_experience)
    @name = name
    @years_experience = years_experience
    @@all << self

  end

  def self.all
    @@all
  end

  def paintings
    Painting.all.select {|p| p.artist == self}
  end

  def num_paintings
    paintings.size
  end

  def paintings_vs_years_ratio
    num_paintings / @years_experience
  end

  def galleries
    paintings.map {|p| p.gallery}
  end


  def cities
    galleries.map {|g| g.name}
  end

  def self.total_experience
    @@all.reduce(0) {|sum, artist| sum += artist.years_experience}
  end

  def create_painting(title, price, gallery)
    binding.pry
    Painting.new(title, price, gallery)
  end

  def self.most_prolific
    @@all.max_by {|a| a.paintings_vs_years_ratio}
  end
end
