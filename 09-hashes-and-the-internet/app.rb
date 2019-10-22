# Require allows us to pull in code from a gem into this file
require "rest-client"
require "pry"
require "json"

# Get a search term from the user
def get_search_term
  puts "Please enter a search term: "
  gets.chomp
end

# Make a request to the API with the search term and parse the response into a hash
def get_response(search_term)
  JSON.parse(RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}"))
end

# Get all of the books
def get_books(response)
  response["items"]
end

# Get the title of a book
def get_title(book)
  book["volumeInfo"]["title"]
end

# Iterate through all of the books and output the title for each one
def print_all_titles(books)
  books.each do |book|
    puts get_title(book)
  end
end

# Run method - uses the other methods we've created to run our app
def run
  search_term = get_search_term
  response = get_response(search_term)
  books = get_books(response)
  print_all_titles(books)
end

