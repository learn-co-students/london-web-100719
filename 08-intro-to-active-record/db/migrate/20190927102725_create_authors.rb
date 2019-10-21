class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    # Creates a table called authors with a column called name, of datatype string
    create_table :authors do |t|
      t.string :name
    end
  end
end
