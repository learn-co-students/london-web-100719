require 'pry'

class Store
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

waitrose = Store.new('waitrose')

binding.pry
p 'EOF'
