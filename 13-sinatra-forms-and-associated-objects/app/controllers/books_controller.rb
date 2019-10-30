class BooksController < ApplicationController

  get "/books" do
    @books = Book.all
    erb :"books/index"
  end

  get "/books/new" do
    @book = Book.new
    erb :"books/new"
  end

  get "/books/:id" do
    id = params[:id]
    @book = Book.find(id)
    erb :"books/show"
  end

  get "/books/:id/edit" do
    id = params[:id]
    @book = Book.find(id)
    erb :"books/edit"
  end

  post "/books/?" do
    @book = Book.create(params)

    redirect "/books/#{@book.id}"
  end

  patch "/books/:id" do
    @book = Book.find(params[:id])
    @book.title = params[:title]
    @book.author = params[:author]
    @book.snippet = params[:snippet]
    @book.save

    redirect "/books/#{@book.id}"
  end

  delete "/books/:id" do
    Book.destroy(params[:id])

    redirect "/books"
  end

end
