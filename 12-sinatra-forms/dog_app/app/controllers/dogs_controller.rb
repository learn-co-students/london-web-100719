class DogsController < ApplicationController

  # index
  get "/dogs" do
    @dogs = Dog.all
    erb :"dogs/index"
  end

  # new
  get "/dogs/new" do
    erb :"dogs/new"
  end

  # create
  post "/dogs" do
    dog = Dog.create(params['dog'])
    redirect "/dogs/#{dog.id}"
  end

  # show
  get "/dogs/:id" do
    @dog = Dog.find(params[:id])
    erb :"dogs/show"
  end

  # destroy
  delete "/dogs/:id" do
    dog = Dog.find(params[:id])
    dog.destroy
    redirect "/dogs"
  end
end
