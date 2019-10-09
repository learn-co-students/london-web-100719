require 'pry'

class Store

  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def products
    Product.all.select {|product| product.store == self }
  end

  def total_products_value
    sum = 0
    self.products.each do |product|
      sum += product.price
    end
    sum
  end

  def add_product(product)
    product.store = self
  end
end

class Product

  attr_accessor :name, :price, :store

  @@all = []

  def initialize(name, price, store)
    @name = name
    @price = price
    @store = store
    @@all << self
  end

  def self.all
    @@all
  end
end

wr = Store.new('waitrose')
Store.new('lidl')

Product.new('designer unique piece of clothing #1', 13531, wr)
Product.new('designer unique piece of clothing #2', 43632, Store.all[1])
Product.new('designer unique piece of clothing #3', 43634, wr)

binding.pry
puts 'EOF'