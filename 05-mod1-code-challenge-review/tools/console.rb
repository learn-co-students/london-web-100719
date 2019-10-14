require_relative '../config/environment.rb'


art1 = Artist.new("Gordy", 10)
art2 = Artist.new("Niki", 1)
art3 = Artist.new("Alex", 3)

# 100.times do |c|
#   Artist.new("Promising artist #{c + 1}", (rand() * 10).to_i)
# end


gall1 = Gallery.new("Saatchi","London")
gall2 = Gallery.new("White Cube","N.Y")

Painting.new("something hip", 4, gall1, art1)
Painting.new("something hip", 45, gall1, art3)
Painting.new("something hip", 46, gall2, art1)
Painting.new("something hip", 422, gall1, art1)
Painting.new("something hip", 445654, gall1, art2)
Painting.new("something hip", 4555, gall1, art1)
Painting.new("something hip", 411, gall1, art3)
Painting.new("something hip", 42234, gall2, art2)
Painting.new("something hip", 4556756, gall2, art3)

# Artist.create_paiting()


binding.pry

puts "Bob Ross rules."
