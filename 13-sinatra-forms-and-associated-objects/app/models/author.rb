class Author < ActiveRecord::Base
  has_many :books

  # Instance method that returns an author's full name by concatenating their first_name and last_name.
  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
