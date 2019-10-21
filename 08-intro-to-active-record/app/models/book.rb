class Book < ActiveRecord::Base # Inheriting from ActiveRecord::Base gives our class access to all the CRUD methods necessary to allow our model to function as an effective ORM that links our app to our database
  # Tells ActiveRecord to create an author method for instances of book that will return the instance of author that book belongs to
  belongs_to :author

  # Good example of abstracting some CRUD functionality out to a model method - if the user of your app selects an option to see all the books with less than 99 pages, rather than reading that from the database in the CLI class, the CLI class simply makes a call to this method to get the correct data and outputs whatever this returns
  def self.all_books_with_less_than_99_pages
    Book.all.where("page_count < 100")
  end
end
