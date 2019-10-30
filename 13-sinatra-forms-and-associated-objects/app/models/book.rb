class Book < ActiveRecord::Base
  belongs_to :author

  # Instance method to return the full name of the author an instance belongs to, so that we don't have to have as much code in our views.
  def author_full_name
    self.author.full_name
  end
end
