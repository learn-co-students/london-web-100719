# A migration file - when we run rake db:migrate, ActiveRecord will look at this file to determine what changes to make to our database
class CreateBooks < ActiveRecord::Migration[5.2]
  # Within the change method, we call the appropriate methods and pass in the appropriate arguments to change our database in the way we choose
  def change
    # Creates a table called books with columns called title and page_count, of datatypes string and integer, respectively
    create_table :books do |t|
      t.string :title
      t.integer :page_count
    end
  end
end
