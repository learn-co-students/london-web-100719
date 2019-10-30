Book.destroy_all

GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books

author = Author.create(first_name: "Generic", last_name: "Author")

Book.all.each do |book|
  book.author = author
  book.save
end
