class AddAuthorIdToBooks < ActiveRecord::Migration[5.2]
  def change
    # Adds a column to the books table called author_id, of datatype integer
    add_column :books, :author_id, :integer
  end
end
