class AuthorsController < ApplicationController

  get "/authors" do
    @authors = Author.all
    erb :"authors/index"
  end

  get "/authors/new" do
    @author = Author.new
    erb :"authors/new"
  end

  get "/authors/:id" do
    id = params[:id]
    @author = Author.find(id)
    erb :"authors/show"
  end

  get "/authors/:id/edit" do
    id = params[:id]
    @author = Author.find(id)
    erb :"authors/edit"
  end

  post "/authors/?" do
    # Create our new instance of author with the values within the nested resource hash.
    @author = Author.create(first_name: params[:author][:first_name], last_name: params[:author][:last_name])

    # Iterate through the array of hashes that represent books that belong to the author we just created.
    params[:author][:books].each do |book|
      # For each book hash, create a new instance of book with the values from the hash and set its author to be the author we just created.
      Book.create(title: book[:title], snippet: book[:snippet], author_id: @author.id)
    end

    redirect "/authors/#{@author.id}"
  end

  patch "/authors/:id" do
    @author = Author.find(params[:id])
    @author.first_name = params[:first_name]
    @author.last_name = params[:last_name]
    @author.save

    redirect "/authors/#{@author.id}"
  end

  delete "/authors/:id" do
    Author.destroy(params[:id])

    redirect "/authors"
  end

end
